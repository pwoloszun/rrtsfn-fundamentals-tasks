import React, { useCallback } from 'react';

import { usePersonContext } from '../providers/PersonProvider';

export default function CutPersonNameButton() {
  const personFacade = usePersonContext();

  const cutNameHandler = useCallback(() => {
    const nextLastName = personFacade.person.lastName.slice(0, -1);
    personFacade.setLastName(nextLastName);
  }, [personFacade]);

  return (
    <button onClick={cutNameHandler}>Cut Last Name</button>
  );
}
