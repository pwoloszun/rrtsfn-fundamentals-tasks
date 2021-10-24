import React from 'react';

type HookFn<State, HookValue> = (initialState: State) => HookValue;

interface IProviderProps<State> {
  initialState: State;
  children: React.ReactNode;
}

export interface CreateContainerResult<State, HookValue> {
  useContainer: () => HookValue;
  Provider: (props: IProviderProps<State>) => React.ReactElement;
};

export default function createContainer<HookValue, State = void>(
  useHook: HookFn<State, HookValue>
): CreateContainerResult<State, HookValue> {

  const HookContext = React.createContext<HookValue | null>(null);

  const useContainer = () => {
    const hookValue = React.useContext(HookContext);
    if (hookValue === null) {
      throw new Error(`Missing Container.Provider wrapper`);
    }
    return hookValue;
  };

  const Provider = (props: IProviderProps<State>) => {
    const { initialState, children } = props;
    const hookValue = useHook(initialState);
    return (
      <HookContext.Provider value={hookValue}>{children}</HookContext.Provider>
    );
  };

  return {
    useContainer,
    Provider,
  };
}
