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
  const [previousValue, setPreviousValue] = useState<T | undefined>(undefined);

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






// function g() {

// }


// function h() { }


// function other() {
//   const resG = g();
//   const resf = f();
//   return resG + resf;
// }
