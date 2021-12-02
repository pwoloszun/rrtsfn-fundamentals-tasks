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
  // const [curr, setCurr] = useState(initialValue);
  // const [past, setPast] = useState<T[]>([]);
  // const [future, setFuture] = useState<T[]>([]);
  const [allValues, setAllValues] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const value = allValues[currentIndex];
  const past = allValues.slice(0, currentIndex);
  const future = allValues.slice(currentIndex + 1);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  return {
    // part 1
    value,
    setValue: (nextValue: T) => {
      const nextAllValues = allValues.slice(0, currentIndex + 1);
      nextAllValues.push(nextValue)
      setAllValues(nextAllValues);
      setCurrentIndex(nextAllValues.length - 1);
    },
    past,

    // part 2
    undo: () => {
      if (canUndo) {
        setCurrentIndex(currentIndex - 1);
      }
    },

    // part 3
    future,
    redo: () => {
      if (canRedo) {
        setCurrentIndex(currentIndex + 1);
      }
    },

    // part 4
    canUndo,
    canRedo,
  };
}
