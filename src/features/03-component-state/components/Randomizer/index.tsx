import React, { Component } from 'react';

import { random } from '../../../../utils/randoms';

import styles from './styles.module.css';

interface RandomizerProps {
  delay: number;
  max: number;
}

interface RandomizerState {
  randomValue: number;
}

export default class Randomizer extends Component<RandomizerProps, RandomizerState> {
  private timeoutId: any;

  constructor(props: RandomizerProps) {
    super(props);
    this.state = {
      randomValue: 997
    };
  }

  componentDidMount() {
    const { delay, max } = this.props;
    this.timeoutId = setTimeout(() => {
      this.setState({
        randomValue: random(max)
      });
    }, delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <div className={styles.randomizer}>
        Result: {this.state.randomValue}
      </div>
    );
  }
}
