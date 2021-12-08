import React, { Component } from 'react';

import styles from './styles.module.css';

import MyRepeater from './MyRepeater';
import MySquare from './MySquare';

export default class PropsComponentGenerator extends Component {
  render() {

    console.log('BEF:',);
    const squareCmp = <MySquare />; // pseudo {type: '...', props: {...}}
    console.log('AFTER:',);

    return (
      <div className={styles.myComp}>
        <h3>PropsComponentGenerator</h3>
        <MyRepeater count={10} component={squareCmp} />
        <hr />
        {/*<MyRepeater count={3} component="MySquare"/>*/}
      </div>
    );
  }
}
