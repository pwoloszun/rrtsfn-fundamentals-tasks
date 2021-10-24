import { useState } from 'react';

// UsePreviousResult[0] is current value
// UsePreviousResult[1] is previous value(undefined by default)
// UsePreviousResult[2] is function to set current(and modify previous)
type UsePreviousResult<T> = [
  T, // current value
  T | undefined,  // previous value
  (nextValue: T) => void // set function
];

function usePrevious<T>(initialValue: T): UsePreviousResult<T> {
  const current = initialValue; // TODO
  const previous = undefined; // TODO

  const setNextValue = (nextValue: T) => {
    // TODO
  };

  return [
    current,
    previous,
    setNextValue
  ];
}

export default usePrevious;
