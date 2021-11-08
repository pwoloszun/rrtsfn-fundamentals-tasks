import React from 'react';

import styles from './styles.module.css';

export default function HelloWorld(): React.ReactElement {
  const person = {
    name: `bob ${Math.random()}`,
    age: 123
  };

  // const jsxEl = React.createElement('h3', { id: '123' }, 'Hello!!');

  let jsxPar = null;
  if (true) {
    jsxPar = (
      <div>
        <h6>title</h6>
        <p>a qq!</p>
      </div>
    );
  }

  // JSX element !!
  // NOT HTML; NOT DOM!!
  return ( // snapshot app
    <h3 id="123" className={styles.helloWorld}>
      Hello 22!!!
      {person.name.toUpperCase() + ' qq'}
      {jsxPar}
    </h3>
  );
}

function calculateCssClasses() {
  const cssClasses = [
    'globTtt',
    styles.helloWorld,
    // styles.gggHhh
  ];
  return cssClasses.join(' ');
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
