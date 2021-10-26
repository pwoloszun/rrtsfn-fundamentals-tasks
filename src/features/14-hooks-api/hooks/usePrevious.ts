import { useState } from 'react';

// UsePreviousResult[0] is current value
// UsePreviousResult[1] is previous value(undefined by default)
// UsePreviousResult[2] is function to set current(and modify previous)
type UsePreviousResult = [
  number, // current value
  number | undefined,  // previous value
  (nextValue: number) => void // set function
];

function usePrevious(initialValue: number): UsePreviousResult {
  const [previousValue, setPreviousValue] = useState<number | undefined>(undefined);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const setNextValue = (nextValue: number) => {
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
