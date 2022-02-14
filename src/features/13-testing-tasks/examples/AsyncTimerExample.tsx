import React, { useEffect, useState } from 'react';

const DELAY_IN_MS = 2200;

export default function AsyncTimerExample(): React.ReactElement {
  const [value, setValue] = useState(100);

  useEffect(() => {
    // console.log('=== EFFECT 1');
    const id = setTimeout(() => {
      setValue(200);
      // console.log('=== TIMEOUT 2');
    }, DELAY_IN_MS);

    return () => {
      // console.log('=== CLEANUP 3');
      clearTimeout(id);
    };
  }, []);

  return (
    <h5>AsyncTimerExample: {value}</h5>
  );
}

