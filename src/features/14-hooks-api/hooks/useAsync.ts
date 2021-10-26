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
    setIsLoading(true);
    asyncFunction()
      .then((data) => {
        setValue(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }, [asyncFunction]);

  return [
    value,
    isLoading,
    error
  ];
}
