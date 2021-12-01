import React from 'react';

import styles from './styles.module.css';

export default function HelloWorld(): React.ReactElement {
  // JSX element !!

  const person = { name: `bob ${Math.random()}` };

  const cssClass = [
    styles.helloWorld,
    styles.gggHhh
  ];

  const url = 'http://hhh..gggg.jpg';

  // NOT HTML
  // NOT DOM
  // its Virtual-DOM (VDOM)
  return (
    <div>
      <h3 id="123" className={cssClass.join(' ')}>
        Hello 22!!!:
        {person.name.toUpperCase()}
      </h3>
      <img src={url} alt="" />
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
