import React from 'react';

export function RemoveRandomButton(): React.ReactElement {
  // TODO: get todosService using Context API
  const count = 123; // TODO
  const index = Math.floor(Math.random() * count);

  const removeHandler = () => {
    console.log('remv  ind', index);
    // TODO: remove todo by index
  };

  return (
    <button onClick={removeHandler}>Remove Random (ind: {index})</button>
  );
}
