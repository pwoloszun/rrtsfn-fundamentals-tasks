import { renderHook, act } from '@testing-library/react-hooks'

import useHistory from '../useHistory';

describe('useHistory', () => {

  it('should init history', () => {
    const initialValue = 1234;
    const result = renderUseHistoryHook(initialValue);
    const { value, future, past, canRedo, canUndo } = result.current;

    expect(value).toEqual(initialValue);
    expect(future).toEqual([]);
    expect(past).toEqual([]);
    expect(canRedo).toEqual(false);
    expect(canUndo).toEqual(false);

    act(() => result.current.setValue(100));
    expect(result.current.value).toEqual(100);
    expect(result.current.past).toEqual([1234]);
  });

  describe('set some values', () => {
    xit('should store history', () => {
      const initialValue = 5;
      // TODO
    });
  });

  describe('time travel', () => {
    xit('should track history', () => {
      //TODO
    });
  });

});

function renderUseHistoryHook<T>(initialValue: T) {
  const { result } = renderHook(() => useHistory(initialValue));
  return result;
}
