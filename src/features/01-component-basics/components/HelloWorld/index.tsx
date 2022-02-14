import React from 'react';

import styles from './styles.module.css';

export default function HelloWorld(): React.ReactElement {
  const person = {
    name: `bob ${Math.random()}`,
    age: 1243,
    id: '123',
    somePhoto: 'http://gggg.jpg'
  };

  // snapshot of patch of screen
  // it is  VDOM object - NOT HTML!! NOT DOM!!
  return (
    <div className={styles.helloWorld + ' ' + styles.gggHhh}>
      <h3 id={person.id}>
        Hello 22!!! {person.name.toUpperCase()}
      </h3>

      <img src={person.somePhoto} />
    </div>
  );
}

// pseudo code
  // const vdomElPseudo = {
  //   type: 'h3',
  //   props: { id: '123', children: 'Hello 22!!' },
  //   //..
  // };


















// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
//
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
//
// // simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };



// ======
// List example
// const people = [
//   { id: 100, name: 'bob' },
//   { id: 200, name: 'ed' },
//   { id: 300, name: 'kate' },
// ];
