import React, { Component } from 'react';

import styles from './styles.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

export default function MySquare() {
  console.log('RENDER:',);
  const [val, setVal] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      setVal(Math.random());
    }, 2000);
  }, []);

  return (
    <div className={styles.mySquare}>
      &nbsp;
      {val}
    </div>
  );
}
