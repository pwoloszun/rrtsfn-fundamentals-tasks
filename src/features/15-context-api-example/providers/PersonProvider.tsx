import React, { createContext, useContext } from 'react';

import usePerson, { UsePersonResult, Person } from '../hooks/usePerson';

const PersonContext = createContext<UsePersonResult | null>(null);

interface IPersonProviderProps {
  value: Person;
}

export default function PersonProvider(props: React.PropsWithChildren<IPersonProviderProps>) {
  const personFacade = usePerson(props.value);

  return (
    <PersonContext.Provider value={personFacade}>
      {props.children}
    </PersonContext.Provider>
  );
}

export function usePersonContext(): UsePersonResult {
  const personFacade = useContext(PersonContext);
  if (!personFacade) {
    throw new Error(`Undefined personFacade`);
  }
  return personFacade;
}


