import { useState } from 'react';

// UsePreviousResult[0] is current value
// UsePreviousResult[1] is previous value(undefined by default)
// UsePreviousResult[2] is function to set current(and modify previous)
type UsePreviousResult<T> = [
  T, // current value
  T | undefined,  // previous value
  (nextValue: T) => void // set function
];

//pseudo code
// const _state = {
//   0: undefined,
//   1: initialValue
// }

function usePrevious<T>(initialValue: T): UsePreviousResult<T> {
  const [previousValue, setPreviousValue] = useState<T | undefined>(undefined);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const setNextValue = (nextValue: T) => {
    setPreviousValue(currentValue);
    setCurrentValue(nextValue);
  };

  return [
    currentValue,
    previousValue,
    setNextValue
  ];
}

export default usePrevious;
