
import React, { useState } from 'react';

import styles from './styles.module.css';

// const myArr = [1, 2, 3, 4];

// const el0 = myArr[0];
// const el1 = myArr[1];

// const [el0, el1, , el3] = myArr;


// const person = { name: 'bob', age: 123 };
// const age = person.age;
// const name = person.name;

// const { age, name } = person;


// pseudo code - what happens under the hood
const _state = {
  0: 123, // piece of state
  1: 'bob'
};

export default function MySimpleCounter(): React.ReactElement {
  console.log('RENDERED ');

  const [value, setValue] = useState(200); // local component state
  const [name, setName] = useState('bob'); // local component state

  const incrementHandler = () => {
    // TODO
    console.log('1st inc click!!!:',);
    setValue(value + 10);
    console.log('2nd inc click!!!:',);
    setValue(value + 10);
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h1>Value: {value}</h1>
      <h3>Name: {name}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
