import { useState, useCallback } from 'react';

export interface UseFetchResult<T> {
  data: T[];
  fetchData: () => void;
  isLoading: boolean;
  error: Error | null;
}

type ApiFn<T> = () => Promise<T[]>

export default function useFetch<T>(apiFn: ApiFn<T>): UseFetchResult<T> {
  // TODO

  return {
    data: [],
    fetchData: () => { },
    isLoading: true,
    error: null,
  };
}
