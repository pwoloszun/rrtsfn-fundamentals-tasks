import React, { useEffect, useState } from 'react';

export default function HelloEffectHook() {
  console.log('RENDER:',);
  const [greeting, setGreeting] = useState(`Hello!`);
  const [updatedAt, setUpdatedAtGreeting] = useState(0);

  useEffect(() => {
    console.log('EFFECT:',);

    const intervalId = setInterval(() => {
      console.log('INTERVAL:');
      setGreeting(`Hello Bob ${Math.random()}`);
    }, 2000);

    return () => { // cleanup
      console.log('CLEANUP:',);
      clearInterval(intervalId);
    };
  }, []);

  const btnClickHandler = () => setUpdatedAtGreeting(Date.now());

  return (
    <div>
      <h3>HelloEffectHook</h3>
      <h5>Greeting: {greeting} </h5>
      <button onClick={btnClickHandler}>Greet</button>
    </div>
  );
}

// pseudo code
// const props = {}
// const _state = {}
// function MyComp() {

// }

// const jsx = MyComp(props, _state);




