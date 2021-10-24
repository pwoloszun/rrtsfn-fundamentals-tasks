import { RootState } from 'src/store/store';

type SelectorMappingFn = (state: RootState) => any;

export function expectStateChanges(
  store: any,
  expectedStateSnapshots: any[],
  selectorMappings: SelectorMappingFn,
  done: () => void
): void {
  let i = 0;
  store.subscribe(() => {
    if (i >= expectedStateSnapshots.length) {
      throw new Error(`Unexpected state change`);
    }
    const state = store.getState();
    const actualState = selectorMappings(state);
    expect(actualState).toEqual(expectedStateSnapshots[i]);
    if (i >= expectedStateSnapshots.length - 1) {
      done();
    }
    i++;
  });
}
