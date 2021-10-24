import React from 'react';

// import ClassicNormalizedTodoListUsingSaga from './containers/ClassicNormalizedTodoListUsingSaga';
import NormalizedTodoListUsingSaga from './containers/NormalizedTodoListUsingSaga';
// import externalTodosWebsocket from './services/external-todos-websocket';

class TodosNormalized extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleStartExternalWS}>Start</button>
          <button onClick={this.handleStopExternalWS}>Stop</button>
        </div>
        <h3>Todos Normalized</h3>
        <NormalizedTodoListUsingSaga />
        {/* <ClassicNormalizedTodoListUsingSaga /> */}
      </div>
    );
  }

  handleStartExternalWS = () => {
    // externalTodosWebsocket.open();
  };

  handleStopExternalWS = () => {
    // externalTodosWebsocket.close();
  };

  componentWillUnmount() {
    // externalTodosWebsocket.close();
  }
}

export default TodosNormalized;
