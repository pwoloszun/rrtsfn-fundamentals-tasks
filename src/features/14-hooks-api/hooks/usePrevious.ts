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
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [prevValue, setPrevValue] = useState<undefined | T>(undefined);

  const setNextValue = (nextValue: T) => {
    setPrevValue(currentValue);
    setCurrentValue(nextValue);
  };

  return [
    currentValue,
    prevValue,
    setNextValue
  ];
}

export default usePrevious;
