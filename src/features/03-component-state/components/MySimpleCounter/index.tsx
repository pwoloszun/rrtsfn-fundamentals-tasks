/*eslint @typescript-eslint/no-unused-vars: 'off'*/

import React, { useState } from 'react';

import styles from './styles.module.css';

// pseudo code
const _state = {
  [0]: 110,
  [1]: { name: 'batman 122314312', age: 123 }
};

export default function MySimpleCounter(): React.ReactElement {
  const [value, setValue] = useState(100); // piece of state
  const [person, setPerson] = useState({ name: 'bob', age: 123 }); // piece of state

  const incrementHandler = () => {
    // setValue((currValue) => {
    //   const nextValue = currValue + 10;
    //   return nextValue;
    // });

    setPerson((currPerson) => {
      const nextPerson = {
        ...currPerson,
        name: `batmqan ${Math.random()}`
      };
      return nextPerson;
    });
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <h3>Name: {person.name}</h3>

      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
