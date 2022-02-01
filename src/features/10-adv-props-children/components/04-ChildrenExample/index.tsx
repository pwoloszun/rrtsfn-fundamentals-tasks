import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';
import MyPageLayout from './MyPageLayout';

export default function ChildrenExample() {
  const [person, setPerson] = useState({ name: 'bob' });

  useEffect(() => {
    setTimeout(() => {
      setPerson({ name: 'ed' });
    }, 2000);
  }, []);

  return (
    <div className={styles.myComp}>

      <MyPageLayout myValue={123}>
        <h5>
          some title
        </h5>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </MyPageLayout>


      <MyPageLayout myValue={456}>
        <h1>my name is {person.name}</h1>
      </MyPageLayout>

    </div>
  );
}
