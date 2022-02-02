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
  age: 567
};

export default function PersonProviderExample(): React.ReactElement {
  return (
    <React.Fragment>

      <PersonProvider value={PERSON_DATA}>
        <div style={{ width: '75%', margin: '0 auto' }}>
          <h3>Context API tasks</h3>
          <div>
            <MutatePersonButton />

            <CutPersonNameButton />
          </div>
          <hr />

          <h3>BATMAN BEGINS</h3>
          <PersonProvider value={batmanData}>
            <MutatePersonButton />
            <DisplayPerson />

          </PersonProvider>

          <h3>BATMAN END</h3>


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
    </React.Fragment>
  );
}
