import React from 'react';

import Parent from './components/Parent';
import PeopleListExample from './components/PeopleListExample';
// import CarConfigurator from './components/CarConfigurator';

export default function PropsEvents() {
  return (
    <div>
      <h3>Props & Events</h3>

      <PeopleListExample />

      <Parent />
      <hr />
      {/* <CarConfigurator /> */}
    </div>
  );
}
