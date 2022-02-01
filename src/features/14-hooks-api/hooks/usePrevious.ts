import { useState } from 'react';

type UsePreviousResult<T> = [
  T, // current value
  T | null,  // previous value
  (nextValue: T) => void // set function
];

export default function usePrevious<T>(initialValue: T): UsePreviousResult<T> {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [prevValue, setPrevValue] = useState<T | null>(null);

  const setNextValue = (nextValue: T) => {
    setPrevValue(currentValue);
    setCurrentValue(nextValue);
    //
  };

  return [
    currentValue,
    prevValue,
    setNextValue
  ];
}
