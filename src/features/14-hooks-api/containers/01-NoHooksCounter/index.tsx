import React from 'react';

import Counter from '../../../../components/Counter';

interface State {
  myValue: number;
}

export default class NoHooksCounter extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      myValue: 997,
    };
  }

  render() {
    const { myValue } = this.state;

    return (
      <div>
        <h3>NoHooksCounter</h3>
        <div>
          <Counter value={myValue}
            onIncrement={this.incrementHandler}
            onDecrement={this.decrementHandler}
          />
        </div>
      </div>
    );
  }

  incrementHandler = () => {
    this.setState((state) => {
      return {
        myValue: state.myValue + 5,
      };
    });
  };

  decrementHandler = () => {
    this.setState((state) => {
      return {
        myValue: state.myValue - 2,
      };
    });
  };

}
