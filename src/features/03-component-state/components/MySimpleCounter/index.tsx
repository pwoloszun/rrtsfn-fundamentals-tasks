import React, { useState } from 'react';

import styles from './styles.module.css';

// pseudo code
const _state = {
  [0]: 110,
  [1]: { name: 'bob', age: 123 },
  // [2]: 'qq',
};

export default function MySimpleCounter(): React.ReactElement {
  const [value, setValue] = useState(100); // state piece
  const [person, setPerson] = useState({ name: 'bob', age: 123 }); // state piece
  // const [name, setName] = useState('qq'); // state piece

  const incrementHandler = () => {
    console.log('click:',);
    // 1. INSTANT! modify internal state
    // 2. mark to re-render
    setValue(value + 10);
    console.log('AFTER:',);
  };

  return ( // snapshot 
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
