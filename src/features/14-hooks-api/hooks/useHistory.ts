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
  const [curr, setCurr] = useState(initialValue);
  const [past, setPast] = useState<T[]>([]);
  const [future, setFuture] = useState<T[]>([]);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  const setValue = (nextValue: T) => {
    const nextPast = [...past, curr];
    setPast(nextPast);
    const nextCurr = nextValue;
    setCurr(nextCurr);
    const nextFuture: T[] = [];
    setFuture(nextFuture);
  };

  const undo = () => {
    if (!canUndo) {
      return;
    }

    const nextPast = past.slice(0, -1);
    setPast(nextPast);
    const nextCurr = past[past.length - 1];
    setCurr(nextCurr);
    const nextFuture = [curr, ...future];
    setFuture(nextFuture);
  };

  const redo = () => {
    if (!canRedo) {
      return;
    }
    const nextPast = [...past, curr];
    setPast(nextPast);
    const nextCurr = future[0];
    setCurr(nextCurr);
    const nextFuture = future.slice(1);
    setFuture(nextFuture);
  };

  return {
    // part 1
    value: curr,
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
