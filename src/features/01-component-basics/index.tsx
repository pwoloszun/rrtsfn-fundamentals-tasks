import React from 'react';

import HelloWorld from './components/HelloWorld';
import PersonalData from './components/PersonalData';

export default function ComponentBasics() {
  return (
    <div>
      <h3>Component Basics</h3>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />

      <hr />
      <PersonalData />
    </div>
  );
}
