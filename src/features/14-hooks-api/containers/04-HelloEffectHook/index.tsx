import React, { useEffect, useState } from 'react';

export default function HelloEffectHook() {
  console.log('RENDER:',);
  const [greeting, setGreeting] = useState(`Hello!`);

  useEffect(() => {
    console.log('EFFECT:',);

    const intervalId = setInterval(() => {
      console.log('interval:',);
      setGreeting(`hello ${Math.random()}`);
    }, 1000);

    return () => { // cleanup
      console.log('CLEANUP',);
      clearInterval(intervalId);
    };
  }, []); // TODO: effect dependencies

  return (
    <div>
      <h3>HelloEffectHook</h3>
      <h5>Greeting: {greeting} </h5>
    </div>
  );
}

// pseudo code

// const vDom = MYComp(props);
