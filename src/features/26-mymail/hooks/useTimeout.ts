import { useEffect } from 'react';

type Fn = () => void;

export default function useTimeout(fn: Fn, delay: number): void {
  useEffect(() => {
    const timeoutId = setTimeout(fn, delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [fn, delay]);
}
