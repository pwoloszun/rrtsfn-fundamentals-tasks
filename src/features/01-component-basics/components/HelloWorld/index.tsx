import React from 'react';

import styles from './styles.module.css';
import otherStyles from '../.../styles.module.css';

export default function HelloWorld(): React.ReactElement {
  // JSX element !!

  const person = { name: `bob ${Math.random()}` };

  const el = (
    <q>lorem ipsum</q>
  );

  // NOT HTML
  // NOT DOM
  // its Virtual-DOM (VDOM)

  console.log('styles:', styles);

  const cssClass = [
    styles.helloWorld,
    styles.gggHhh
  ];

  return (
    <h3 id="123" className={cssClass.join(' ')}>
      Hello 22!!!:
      <span>
        {person.name.toUpperCase()}
      </span>
      <hr />
      {el}
    </h3>
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
