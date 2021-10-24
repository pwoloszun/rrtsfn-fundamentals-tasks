import React, { useCallback } from 'react';

import { usePersonContext } from '../providers/PersonProvider';

export default function MutatePersonButton() {
  const personFacade = usePersonContext();

  const createHandler = useCallback(() => {
    const nextName = `Doe ${Math.random()}`;
    personFacade.setLastName(nextName);
    personFacade.incrementAge();
  }, [personFacade]);

  return (
    <button onClick={createHandler}>Randomize Person</button>
  );
}
