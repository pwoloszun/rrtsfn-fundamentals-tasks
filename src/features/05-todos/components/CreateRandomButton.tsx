import React from 'react';

export function CreateRandomButton(): React.ReactElement {
  // TODO: get todosService using Context API

  const createHandler = () => {
    const title = `bob ${Math.random()}`;
    console.log('crea  tit', title);
    // TODO: create todo using title
  };

  return (
    <button onClick={createHandler}>Create Random</button>
  );
}
