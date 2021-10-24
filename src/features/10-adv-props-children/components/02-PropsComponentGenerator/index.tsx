import React, { Component } from 'react';

import styles from './styles.module.css';

import MyRepeater from './MyRepeater';
import MySquare from './MySquare';

export default class PropsComponentGenerator extends Component {
  render() {
    return (
      <div className={styles.myComp}>
        <h3>PropsComponentGenerator</h3>
        <MyRepeater count={5} component={<MySquare />} />
        <hr />
        {/*<MyRepeater count={3} component="MySquare"/>*/}
      </div>
    );
  }
}
