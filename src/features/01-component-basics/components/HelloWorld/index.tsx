import React from 'react';

import styles from './styles.module.css';

export default function HelloWorld(): React.ReactElement {

  const person = { name: `bob ${Math.random()}`, age: 123 };

  // NOT HTML!
  // NOT DOM!
  // return Virtual DOM
  const isOk = false;

  const myEl = <div><span>qqq</span></div>;

  return ( // JSX expressions
    <div className={styles.helloWorld + ' ' + styles.gggHhh}>

      {
        isOk && myEl
      }

      {/* <img src={person.name} /> */}

      <h3 id="123">
        Hello 22!!!
        {person.name.toUpperCase()}
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
