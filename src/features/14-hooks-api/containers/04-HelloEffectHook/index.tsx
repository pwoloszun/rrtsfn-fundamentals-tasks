import React, { useEffect, useState } from 'react';


// 1. phase render 
// 2. phase commit

export default function HelloEffectHook() {
  console.log('RENDER:',);
  const [greeting, setGreeting] = useState(`Hello!`);

  useEffect(() => {
    console.log('EFFECT:',);

    const intervalId = setInterval(() => {
      console.log('setGreeting:',);
      setGreeting(`Hello Bob ${Math.random()}`);
    }, 2000);

    return () => { // cleanup
      console.log('CLEANUP:',);
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
// const jsx = HelloEffectHook(props)
