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
    let isRunning = true;
    asyncFunction()
      .then((data) => {
        if (isRunning) {
          setValue(data);
        }
      })
      .catch((err) => {
        if (isRunning) {
          setError(err);
        }
      })
      .finally(() => {
        if (isRunning) {
          setIsLoading(false);
        }
      });

    return () => { //cleanup
      isRunning = false;
    };
  }, [asyncFunction]);

  return [
    value,
    isLoading,
    error
  ];
}
