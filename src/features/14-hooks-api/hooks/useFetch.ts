import { useState, useCallback } from 'react';

export enum RequestStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

export interface UseFetchResult<T> {
  data: T | undefined;
  fetchData: (...args: any[]) => void;
  status: RequestStatus;
  error: Error | null;
}

type ApiFn<T> = (...args: any[]) => Promise<T>

export default function useFetch<T>(apiFn: ApiFn<T>): UseFetchResult<T> {
  const [entitiesData, setEntitiesData] = useState<T | undefined>(undefined);
  const [status, setStatus] = useState(RequestStatus.Idle);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback((...args: any[]) => {
    setStatus(RequestStatus.Pending);
    apiFn(...args)
      .then((entities) => {
        setEntitiesData(entities);
        setStatus(RequestStatus.Success);
      })
      .catch((err) => {
        setError(err);
        setStatus(RequestStatus.Error);
      });
  }, [apiFn]);

  return {
    data: entitiesData,
    fetchData,
    status,
    error
  };
}
