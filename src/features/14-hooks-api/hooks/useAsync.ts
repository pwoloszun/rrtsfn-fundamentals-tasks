import { useState, useEffect } from 'react';

type AsyncFn<T> = () => Promise<T>;

type UseAsyncResult<T> = [
  T | null,
  boolean,
  Error | null
];

export default function useAsync<T>(asyncFunction: AsyncFn<T>): UseAsyncResult<T> {
  const value = null; // TODO
  const isLoading = false; // TODO
  const error = null; // TODO

  return [
    value,
    isLoading,
    error
  ];
}
