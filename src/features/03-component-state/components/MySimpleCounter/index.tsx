import { clone, cloneDeep } from 'lodash';
import React, { useState } from 'react';

import styles from './styles.module.css';
import produce from 'immer';

// pseudo code
const _state = {
  [0]: 110,
  // [1]: { name: 'bob', age: 123 },
};

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDER:',);
  // state driven
  // state === SINLGE SOURCE OF TRUTH
  const [value, setValue] = useState(100); // state piece
  const [person, setPerson] = useState({ name: 'bob', age: 123 }); // state piece

  const incrementHandler = () => {
    console.log('click:',);
    // 1. INSTANT! modify internal state
    // 2. mark to re-render

    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue;
    });
    setValue((currValue) => currValue + 10);

    // WRONG!!!! NEVER mutate comp. state !!!!
    // person.name = `batman ${Math.random()}`;

    // GOOD
    const nextPerson = produce(person, (draft) => {
      draft.name = `batman ${Math.random()}`;
      draft.age = 456;
    });
    setPerson(nextPerson); // ===
  };

  return ( // snapshot 
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <h3>Name: {person.name}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
