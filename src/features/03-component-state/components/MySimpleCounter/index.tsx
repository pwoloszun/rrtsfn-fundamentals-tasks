import React, { useState, useRef } from 'react';

import styles from './styles.module.css';
import { produce } from 'immer';


// const arr = ['a', 'b', 'c'];

// const el0 = arr[0];
// const el1 = arr[1];
// const el2 = arr[2];

// const [el0, , el2] = arr;

// pseudo code
const _state = {
  0: 210,
  1: 'bob',
  2: { name: '12345654667867867', id: 123 }
};


// 1: render phase
// 2: commit phase
// painted in the browser
// single source of truth

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDER:',);
  const [value, setValue] = useState(200); // state piece
  const [person, setPerson] = useState({
    name: 'batman',
    id: 123,
    children: [{ id: 456, name: 'ed' }]
  }); // local piece of state

  const incrementHandler = () => {
    console.log('BTN CLICK');
    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue;
    });

    setPerson((currPerson) => {
      const nextPerson = produce(currPerson, (draft) => {
        draft.name = `bat ${Math.random()}`;
        draft.children[0].name = 'ed 22';
      });
      return nextPerson;
    });
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <h3>person: {person.name}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
