import React, { useState } from 'react';

import styles from './styles.module.css';


// PSEUDO code
let internalIndex = 0;

const _state = {
  [0]: 210, // piece of state
  // [1]: { name: 'batman', age: 1234 }
};

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDER:',);
  // local state
  // SINGLE source of truth
  const [value, setValue] = useState(200); // piece of state
  // const [person, setPerson] = useState({ name: 'batman', age: 1234 }); // piece of state


  const incrementHandler = () => {
    console.log('click:',);

    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue;
    });

    setValue((currValue) => currValue + 10);
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
