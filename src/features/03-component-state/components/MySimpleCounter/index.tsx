import React, { useState } from 'react';

import styles from './styles.module.css';
import { produce } from 'immer';
import { cloneDeep } from 'lodash';


// PSEUDO code
let internalIndex = 0;

const _state = {
  [0]: 210, // piece of state
  [1]: { name: 'batman', age: 1234 }
};

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDER:',);

  // local state
  // SINGLE source of truth
  const [value, setValue] = useState(200); // piece of state
  const [person, setPerson] = useState({ name: 'batman', age: 1234 }); // piece of state


  const incrementHandler = () => {
    console.log('click:',);

    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue;
    });

    setPerson((currPerson) => {
      const nextPerson = produce(currPerson, (draft) => {
        draft.name = `batman ${Math.random()}`;
      });
      return nextPerson;
    }); // ===
  };

  const isOk = true;

  return (
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <h3>NAme: {person.name}</h3>

      {
        isOk && <h3>a qq!</h3>
      }

      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
