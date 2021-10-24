import React, { useEffect, useState } from 'react';

export default function HelloEffectHook() {
  const [greeting, setGreeting] = useState(`Hello!`);
  const [updatedAt, setUpdatedAtGreeting] = useState(0);

  useEffect(() => {
    // TODO 1: async generate next greeting: `Hello Bob ${Math.random()}`

    // TODO 2: cleanup
  }); // TODO: effect dependencies

  const btnClickHandler = () => setUpdatedAtGreeting(Date.now());

  return (
    <div>
      <h3>HelloEffectHook</h3>
      <h5>Greeting: {greeting} </h5>
      <button onClick={btnClickHandler}>Greet</button>
    </div>
  );
}
