import React from 'react';

import Counter from '../../../../components/Counter';
import useHistory from '../../hooks/useHistory';

export default function TrackableCounter() {
  const {
    value,
    setValue,
    past,
    future,
    canRedo,
    canUndo,
    redo,
    undo,
  } = useHistory(34);

  const undoHandler = () => undo();
  const redoHandler = () => redo();
  const incrementHandler = () => setValue(value + 1);
  const decrementHandler = () => setValue(value - 1);

  return (
    <div>
      <h3>TrackableCounter</h3>
      <h5>Previous Values: {past.join(', ')} </h5>
      <h5>Next Values: {future.join(', ')} </h5>
      <h5>Can Undo?: {`${canUndo}`} </h5>
      <h5>Can Redo?: {`${canRedo}`} </h5>
      <div>
        <button onClick={undoHandler} disabled={!canUndo}>Undo</button>
        <button onClick={redoHandler} disabled={!canRedo}>Redo</button>
      </div>
      <div>
        <Counter value={value}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </div>
    </div>
  );
}
