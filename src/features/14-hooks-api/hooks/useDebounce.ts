import { useState, useEffect } from 'react';

type UseDebounceResult<T> = [T, (nextValue: T) => void];

export default function useDebounce<T>(initialValue: T, delayInMs: number): UseDebounceResult<T> {
  // TODO

  return [initialValue, (nextValue: T) => { }];
}
