import React from 'react';

import ClassicAsyncCounterUsingSaga from './containers/ClassicAsyncCounterUsingSaga';

class ReduxAsync extends React.Component {
  render() {
    return (
      <div>
        <h3>ReduxAsync</h3>
        <ClassicAsyncCounterUsingSaga />
      </div>
    );
  }
}

export default ReduxAsync;
