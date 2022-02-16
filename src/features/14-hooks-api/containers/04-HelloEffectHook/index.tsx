import React, { useEffect, useState } from 'react';

export default function HelloEffectHook() {
  console.log('RENDER:',);
  const [greeting, setGreeting] = useState(`Hello!`);

  useEffect(() => {
    console.log('EFFECT:',);

    const intervalId = setInterval(() => {
      console.log('INTERVAL:',);
      setGreeting(`hello ${Math.random()}`);
    }, 2000);

    return () => { // cleanup 
      console.log('CLENUP:',);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h3>HelloEffectHook</h3>
      <h5>Greeting: {greeting} </h5>
    </div>
  );
}




// psuedo
// function HelloWrodls(props) {
//   //...
//   window.title = 'bob ${MAth.random90}'

//   return (<div></div>)
// }

// const jsx = HelloWrodls(props);
// // Side Effect
