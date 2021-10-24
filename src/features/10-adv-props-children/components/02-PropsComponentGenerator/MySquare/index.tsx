import React, { Component } from 'react';

import styles from './styles.module.css';

export default class MySquare extends Component {
  render() {
    return (
      <div className={styles.mySquare}>&nbsp;
      </div>
    );
  }
}
