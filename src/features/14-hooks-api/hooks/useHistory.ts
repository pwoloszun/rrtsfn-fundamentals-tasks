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
  // TODO

  return {
    // part 1
    value: initialValue,
    setValue: (nextValue: T) => { },
    past: [],

    // part 2
    undo: () => { },

    // part 3
    future: [],
    redo: () => { },

    // part 4
    canUndo: false,
    canRedo: false,
  };
}
