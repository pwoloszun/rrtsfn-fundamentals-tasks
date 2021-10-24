import React, { Component } from 'react';

import styles from './styles.module.css';

interface MyRepeaterProps {
  count: number;
  component: JSX.Element;
}

export default class MyRepeater extends Component<MyRepeaterProps> {
  render() {
    const { count, component } = this.props;

    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        <React.Fragment key={i}>
          {component}
        </React.Fragment>
      );
    }
    return (
      <div className={styles.myRepeater}>
        <h3>MyRepeater</h3>
        <div className={styles.cont}>
          {arr}
        </div>
      </div>
    );
  }
}
