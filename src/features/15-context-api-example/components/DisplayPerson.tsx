import React from 'react';

import { usePersonContext } from '../providers/PersonProvider';

export default function DisplayPerson() {
  const personFacade = usePersonContext();
  const personJson = JSON.stringify(personFacade.person, null, 2);
  return (
    <div>
      <h3>LastName length: {personFacade.person.lastName.length}</h3>
      <pre>
        {personJson}
      </pre>
    </div>
  );
}
