import { renderHook, act } from '@testing-library/react-hooks'

import useHistory from '../useHistory';

function renderUseHistoryHook<T>(initialValue: T) {
  const { result } = renderHook(() => useHistory(initialValue));
  return result;
}

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
  });

  describe('set some values', () => {
    it('should store history', () => {
      const initialValue = 5;
      const result = renderUseHistoryHook(initialValue);

      act(() => result.current.setValue((v) => v + 10));
      act(() => {
        result.current.setValue((v) => v - 20);
        result.current.setValue((v) => v + 30);
      });

      const { value, future, past, canRedo, canUndo } = result.current;
      expect(value).toEqual(25);
      expect(future).toEqual([]);
      expect(past).toEqual([5, 15, -5]);
      expect(canRedo).toEqual(false);
      expect(canUndo).toEqual(true);
    });
  });

  describe('time travel', () => {
    it('should track history', () => {
      const initialValue = 10;
      const result = renderUseHistoryHook(initialValue);

      act(() => {
        result.current.setValue((v) => v + 10);
        result.current.setValue((v) => v + 10);
        result.current.setValue((v) => v + 10);
        result.current.setValue((v) => v + 10);
        result.current.setValue((v) => v + 10);
        result.current.setValue((v) => v + 10);
        result.current.setValue((v) => v + 10);
      });

      act(() => {
        result.current.undo();
        result.current.undo();
        result.current.undo();
        result.current.undo();
        result.current.undo();
      });

      act(() => {
        result.current.redo();
        result.current.redo();
      });

      const { value, future, past, canRedo, canUndo } = result.current;
      expect(value).toEqual(50);
      expect(future).toEqual([60, 70, 80]);
      expect(past).toEqual([10, 20, 30, 40]);
      expect(canRedo).toEqual(true);
      expect(canUndo).toEqual(true);
    });
  });

});
