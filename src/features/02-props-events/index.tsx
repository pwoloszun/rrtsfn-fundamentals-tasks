import React from 'react';

import Parent from './components/Parent';
// import CarConfigurator from './components/CarConfigurator';
import PeopleListExample from './components/PeopleListExample/index';

export default function PropsEvents() {
  return (
    <div>
      <h3>Props & Events</h3>
      <Parent />
      <hr />
      {/* <CarConfigurator /> */}

      <PeopleListExample />
    </div>
  );
}
