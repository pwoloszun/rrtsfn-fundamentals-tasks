import { useState } from 'react';

interface UseWaitResult {
  isWaiting: (id: string) => boolean;
  startWaiting: (id: string) => void;
  endWaiting: (id: string) => void;
};

function useWait(): UseWaitResult {
  // TODO

  return {
    isWaiting: (id: string) => true,
    startWaiting: (id: string) => { },
    endWaiting: (id: string) => { }
  };
}

export default useWait;
