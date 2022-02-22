import React from 'react';

import PersonProvider from '../providers/PersonProvider';
import { Person } from '../hooks/usePerson';

import MutatePersonButton from './MutatePersonButton';
import CutPersonNameButton from './CutPersonNameButton';
import DisplayPerson from './DisplayPerson';

const PERSON_DATA: Person = {
  firstName: 'bob',
  lastName: 'smith',
  age: 123
};

const batmanData: Person = {
  firstName: 'batman',
  lastName: 'wayne',
  age: 456
};

export default function PersonProviderExample(): React.ReactElement {
  return (
    <PersonProvider value={PERSON_DATA}>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>Context API tasks</h3>
        <div>
          <MutatePersonButton />
          <CutPersonNameButton />
        </div>
        <hr />

        <h3>Batman BEGINS</h3>
        <PersonProvider value={batmanData}>
          <MutatePersonButton />
          <DisplayPerson />
        </PersonProvider>
        <h3>Batman ENDS</h3>


        <hr />

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
