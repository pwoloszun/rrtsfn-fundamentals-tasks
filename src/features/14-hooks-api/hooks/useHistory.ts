import { useState } from 'react';
import { last, first } from 'lodash';
import produce, { Draft } from 'immer';

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
  const [future, setFuture] = useState<T[]>([]);
  const [past, setPast] = useState<T[]>([]);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;


  const setValue = (value: T) => {
    const nextPast = [...past, currentValue];
    setPast(nextPast);

    const nextValue = value;
    setCurrentValue(nextValue);

    const nextFuture: T[] = [];
    setFuture(nextFuture);
  };

  const undo = () => {
    if (!canUndo) {
      return;
    }
    const nextPast = past.slice(0, -1);
    setPast(nextPast);

    const nextValue = past[past.length - 1];
    setCurrentValue(nextValue);

    const nextFuture = [currentValue, ...future];
    setFuture(nextFuture);
  };

  const redo = () => {
    if (!canRedo) {
      return;
    }
    const nextPast = [...past, currentValue];
    setPast(nextPast);

    const nextValue = future[0];
    setCurrentValue(nextValue);

    const nextFuture = future.slice(1);
    setFuture(nextFuture);
  };

  return {
    value: currentValue,
    setValue,
    past,
    undo,
    future,
    redo,
    canUndo,
    canRedo,
  };
}
