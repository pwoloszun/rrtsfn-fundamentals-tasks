import { useState } from 'react';
import { last, first } from 'lodash';

type NextValueFn<T> = (currentValue: T) => T;
type NextValueArg<T> = T | NextValueFn<T>;

interface UseHistoryResult<T> {
  value: T;
  setValue: (nextValue: NextValueArg<T>) => void;
  past: T[];
  future: T[];
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

interface HistoryState<T> {
  current: T;
  past: T[];
  future: T[];
}


export default function useHistory<T>(initialValue: T): UseHistoryResult<T> {
  const [historyState, setHistoryState] = useState<HistoryState<T>>({
    current: initialValue,
    past: [],
    future: [],
  });

  const canUndo = historyState.past.length > 0;
  const canRedo = historyState.future.length > 0;

  const setValue = (nextValueArg: NextValueArg<T>) => {
    setHistoryState((histVal) => {
      const { current, past } = histVal;
      let nextVal: T;
      if (typeof nextValueArg === 'function') {
        nextVal = (nextValueArg as NextValueFn<T>)(current);
      } else {
        nextVal = nextValueArg;
      }

      return {
        past: [...past, current],
        future: [],
        current: nextVal,
      };
    });
  };

  const undo = () => {
    if (!canUndo) {
      return;
    }
    setHistoryState((histVal) => {
      const { current, past, future } = histVal;
      const previous = last(past);
      if (!previous) {
        return histVal;
      }
      return {
        past: past.slice(0, past.length - 1),
        future: [current, ...future],
        current: previous,
      };
    });
  };

  const redo = () => {
    if (!canRedo) {
      return;
    }
    setHistoryState((histVal) => {
      const { current, past, future } = histVal;
      const next = first(future);
      if (!next) {
        return histVal;
      }
      return {
        past: [...past, current],
        future: future.slice(1),
        current: next,
      };
    });
  };

  return {
    value: historyState.current,
    setValue,
    past: historyState.past,
    future: historyState.future,
    undo,
    redo,
    canUndo,
    canRedo,
  };
}
