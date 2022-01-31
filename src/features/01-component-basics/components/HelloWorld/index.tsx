import React from 'react';

import styles from './styles.module.css';

const cssClasses = [
  styles.helloWorld,
  styles.gggHhh,
];

export default function HelloWorld(): React.ReactElement {
  // JSX element !!
  const person = { name: `bob ${Math.random()}` };

  return ( // snapshot patch of view
    <div className={styles.helloWorld}>
      <h3 id="123">
        Person: {person.name}
      </h3>
    </div>
  );
}


















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
