import React from 'react';

import gggHhh from './styles.module.css';

export default function HelloWorld(): React.ReactElement {
  const person = {
    name: `Bob ${Math.random()}`
  };

  return (
    <h3 id="my-smth" className={gggHhh.aaaBbb + ' aaaBbb'}>
      Hello 22!!!
      {person.name.toUpperCase() + ' smith'}
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
