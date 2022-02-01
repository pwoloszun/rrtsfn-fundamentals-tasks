import { useState } from 'react';
import { last, first } from 'lodash';

interface UseHistoryResult<T> {
  value: T;
  setValue: (nextValue: T) => void;
  past: T[];
  future: T[];
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

export default function useHistory<T>(initialValue: T): UseHistoryResult<T> {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [past, setPast] = useState<T[]>([]);
  const [future, setFuture] = useState<T[]>([]);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  const setValue = (nextValue: T) => {
    const nextPast = [...past, currentValue];
    setPast(nextPast);
    const nextCurrentValue = nextValue;
    setCurrentValue(nextCurrentValue);
    const nextFuture: T[] = [];
    setFuture(nextFuture);
  };

  const undo = () => {
    if (!canUndo) {
      return;
    }
    const nextPast = past.slice(0, -1);
    setPast(nextPast);
    const nextCurrentValue = past[past.length - 1];
    setCurrentValue(nextCurrentValue);
    const nextFuture = [currentValue, ...future];
    setFuture(nextFuture);
  };

  const redo = () => {
    if (!canRedo) {
      return;
    }
    const nextPast = [...past, currentValue];
    setPast(nextPast);
    const nextCurrentValue = future[0];
    setCurrentValue(nextCurrentValue);
    const nextFuture = future.slice(1);
    setFuture(nextFuture);
  };

  return {
    // part 1
    value: currentValue,
    setValue,
    past,

    // part 2
    undo,

    // part 3
    future,
    redo,

    // part 4
    canUndo,
    canRedo,
  };
}
