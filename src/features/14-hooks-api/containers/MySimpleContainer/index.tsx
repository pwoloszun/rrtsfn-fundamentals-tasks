import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

//Async event
// when app starts - async
// fetchig data(AJAX, websockets)
// timer functions call: setInterval, setTime
// DOM events: click, 


export function FunctionalMySimpleContainer() {
  const [value, setValue] = useState(123);

  // TODO 1: AFTER render

  // TODO 2: clean up

  return (
    <div>
      {value}
    </div>
  );
}


export default class MySimpleContainer extends React.Component<any, any> {

  private intervalId: any;

  constructor(props: any) {
    super(props);
    this.state = {
      value: 123
    };
  }

  render() {
    // NO React side effects

    const { value } = this.state;
    return (
      <div>
        {value}
      </div>
    );
  }

  // life cycle hooks/event
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('qq');
      this.setState((state: any) => {
        return {
          value: state.value + 1
        };
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}
