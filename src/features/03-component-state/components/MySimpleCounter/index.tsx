import React, { useState } from 'react';

import styles from './styles.module.css';
import { cloneDeep } from 'lodash';
import produce from 'immer';

// React render mechanism:
// 1) (re)render phase
// 2) commit phase


// pseudo code - _state created per comp. instance
const _state0 = {
  0: 110,
  // 1: 'batman!',
  2: { name: 'bob', age: 123 }
};

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDER:',);
  // const value = 100; // local comp state 
  // state === SINGLE SOURCE OF TRUTH
  const [value, setValue] = useState(100); // state piece
  // const [name, setName] = useState('batman!'); // state piece
  const [person, setPerson] = useState({
    name: { value: 'bob' },
    age: { value: 123 },
  }); // state piece

  const incrementHandler = () => {
    // value is STALE state
    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue;
    });
    setValue((currValue) => currValue + 10);

    setPerson((currPerson) => {
      const nextPerson = produce(currPerson, (draft) => {
        draft.name.value = `batman ${Math.random()}`;
      });
      return nextPerson;
    });
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h3>Value {value}</h3>
      <h3>my Person name: {person.name.value}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
