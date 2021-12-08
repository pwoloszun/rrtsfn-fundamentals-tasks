import React from 'react';

import PersonProvider from '../providers/PersonProvider';
import { Person } from '../hooks/usePerson';

import MutatePersonButton from './MutatePersonButton';
import CutPersonNameButton from './CutPersonNameButton';
import DisplayPerson from './DisplayPerson';
import OtherIntermediateComp from './OtherIntermediateComp';

const PERSON_DATA: Person = {
  firstName: 'bob',
  lastName: 'smith',
  age: 123
};

export default function PersonProviderExample(): React.ReactElement {
  return (
    <PersonProvider value={PERSON_DATA}>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>Context API tasks</h3>
        <div>
          <h1>producers</h1>
          <MutatePersonButton />
          <CutPersonNameButton />
        </div>
        <hr />


        <div>
          <PersonProvider value={{ firstName: 'batman', lastName: 'Wayne', age: 456 }}>
            <h3>BATMAN BEGINS</h3>
            <MutatePersonButton />
            <DisplayPerson />
            <h3>BATMAN ENDS</h3>
          </PersonProvider>
        </div>


        <h1>consumers</h1>
        <div>
          1st:
          <DisplayPerson />
          <hr />

          2nd:
          <DisplayPerson />
        </div>
      </div>
    </PersonProvider>
  );
}
