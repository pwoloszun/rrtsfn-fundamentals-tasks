/*eslint @typescript-eslint/no-unused-vars: 'off'*/

import React, { Component } from 'react';

import styles from './styles.module.css';

interface PropsExampleProps {
  label: string;
  name: string;
  age: number;
  sex: string;
}

export default class PropsExample extends Component<PropsExampleProps> {
  render() {
    const { label, name, age, sex } = this.props;

    // TODO
    // console.log(`${label} MyPropsExample props`, name, age, sex);

    return (
      <div className={styles.myPropsExample}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Sex: {sex}</div>
      </div>
    );
  }
}
