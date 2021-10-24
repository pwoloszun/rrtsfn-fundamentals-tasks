import React from 'react';

import MySimpleCounter from './components/MySimpleCounter';
// import MyToggleText from './components/MyToggleText';
// import Randomizer from './components/Randomizer';

export default function ComponentState() {
  return (
    <div>
      <h3>Component State</h3>
      <MySimpleCounter />
      <hr />

      {/* <MyToggleText /> */}
      <hr />

      {/* <Randomizer delay={2200} max={50} /> */}
    </div>
  );
}
