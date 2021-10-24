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
