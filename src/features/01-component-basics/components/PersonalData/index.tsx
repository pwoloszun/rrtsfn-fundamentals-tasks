import React from 'react';

import styles from './styles.module.css';

export default function PersonalData(): React.ReactElement {
  const user = {
    name: 'Batman',
    age: 43,
    email: 'bruce.w@heroes.com',
    url: 'https://i.pinimg.com/originals/1c/be/c4/1cbec4f304cf609d2346d3c5f2ff8b22.jpg'
  };

  return (
    <div className={styles.personalData}>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <img src={user.url} alt="" />
    </div>
  );
}

