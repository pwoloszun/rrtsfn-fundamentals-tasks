import React, { Component } from 'react';

import styles from './styles.module.css';
import MyPageLayout from './MyPageLayout';

export default class ChildrenExample extends Component {
  render() {
    return (
      <div className={styles.myComp}>

        <MyPageLayout myValue={123}>
          <h5>
            some title
          </h5>
          <div>first</div>
          <div>second</div>
          <div>third</div>
        </MyPageLayout>

        <MyPageLayout myValue={456}>
          <h1>
            a QQQ!
          </h1>
        </MyPageLayout>

        <MyPageLayout myValue={987} />

      </div>
    );
  }
}
