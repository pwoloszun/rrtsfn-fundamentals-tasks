import { useState, useEffect } from 'react';

type UseDebounceResult<T> = [T, (nextValue: T) => void];

export default function useDebounce<T>(initialValue: T, delayInMs: number): UseDebounceResult<T> {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delayInMs]);

  return [debouncedValue, setValue];
}
