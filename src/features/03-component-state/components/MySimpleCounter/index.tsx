import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import { produce } from 'immer';

import styles from './styles.module.css';

// pseudo code
const _state = {
  [0]: 110,
  [1]: { name: 'batman 122314312', age: 123 }
};

export default function MySimpleCounter(): React.ReactElement {
  const [value, setValue] = useState(100); // piece of state
  const [person, setPerson] = useState({
    name: 'bob',
    age: 123,
    someChilds: [
      { id: 123, name: 'ed' },
      { id: 456, name: 'kate' }
    ]
  }); // piece of state

  const incrementHandler = () => {
    // setValue((currValue) => {
    //   const nextValue = currValue + 10;
    //   return nextValue;
    // });

    setPerson((currPerson) => {
      // const nextPerson = cloneDeep(currPerson);
      // nextPerson.name = `batman ${Math.random()}`;

      const nextPerson = produce(currPerson, (draft) => {
        draft.name = `batman ${Math.random()}`;
      });

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
