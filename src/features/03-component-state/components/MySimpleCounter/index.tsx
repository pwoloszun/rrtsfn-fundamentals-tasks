import React, { useState } from 'react';

import styles from './styles.module.css';
import { produce } from 'immer';

// const myArr = [1, 2, 3, 4];

// const el0 = myArr[0];
// const el1 = myArr[1];

// const [el0, el1, , el3] = myArr;


// const person = { name: 'bob', age: 123 };
// const age = person.age;
// const name = person.name;

// const { age, name } = person;


// pseudo code - what happens under the hood
// const _state = {
//   0: 210, // piece of state
//   1: { name: 'bob', age: 123 }
// };

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDERED ');

  const [value, setValue] = useState(200); // local component state
  const [person, setPerson] = useState({
    name: 'bob',
    age: 123,
  }); // local component state

  const incrementHandler = () => {
    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue
    });
    setValue((currValue) => currValue + 10);

    setPerson((currPerson) => {
      // const nextPerson = { ...person, name: `Batman ${Math.random()}` };
      const nextPerson = produce(currPerson, (draft) => {
        draft.name = `Batman ${Math.random()}`;
      });
      return nextPerson;
    });
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h1>Value: {value}</h1>
      <h3>Name: {person.name}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
