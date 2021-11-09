import React, { Component } from 'react';

import styles from './styles.module.css';

import MyRepeater from './MyRepeater';
import MySquare from './MySquare';

export default class PropsComponentGenerator extends Component {

  render() {
    // const jsxEl = <MySquare />;
    // const jsxEl2 = React.createElement(MySquare, null, null);

    return (
      <div className={styles.myComp}>
        <h3>PropsComponentGenerator</h3>
        <MyRepeater count={15} component={<MySquare />} />
        <hr />
        {/*<MyRepeater count={3} component="MySquare"/>*/}
      </div>
    );
  }
}
