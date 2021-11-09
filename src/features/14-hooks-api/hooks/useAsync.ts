import { useState, useEffect } from 'react';

type AsyncFn<T> = () => Promise<T>;

type UseAsyncResult<T> = [
  T | null,
  boolean,
  Error | null
];

export default function useAsync<T>(asyncFunction: AsyncFn<T>): UseAsyncResult<T> {
  const [value, setValue] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function tmp() {
      setIsLoading(true);
      try {
        const data = await asyncFunction();
        setValue(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    tmp();
  }, [asyncFunction]);

  return [
    value,
    isLoading,
    error
  ];
}
