import React, { createContext, useContext } from 'react';

import { UseManageTodosResult } from '../hooks/useManageTodos';

// TODO 1: create context of type: UseManageTodosResult | null, initialized with null

interface ITodosProviderProps {
  initialValue: UseManageTodosResult;
}

export default function TodosProvider(props: React.PropsWithChildren<ITodosProviderProps>): React.ReactElement {
  // TODO 2a: return children wrapped by provider
  // TODO 2b: init provider with initial value

  return (
    <div>PROVIDER_PLACEHOLDER</div>
  );
};

export function useTodosContext(): UseManageTodosResult {
  // TODO 3: return context value
  throw new Error(`TODO: useTodosContext`);
}
