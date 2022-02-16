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
    let isUnmounted = false;
    setIsLoading(true);
    asyncFunction()
      .then((data) => {
        if (isUnmounted) {
          return;
        }
        setValue(data);
      })
      .catch((err) => {
        if (isUnmounted) {
          return;
        }
        setError(err);
      })
      .finally(() => {
        if (isUnmounted) {
          return;
        }
        setIsLoading(false);
      });

    return () => {
      isUnmounted = true;
    };
  }, [asyncFunction]);

  return [
    value,
    isLoading,
    error
  ];
}
