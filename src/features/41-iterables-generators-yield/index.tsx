import React from 'react';

import styles from './index.module.css';

import iteratorProtocolExample from './examples/01-iterator-protocol';
import yieldGeneratorFunctionExample from './examples/02-yield-generator-function';
import asyncWithYieldExample from './examples/03-async-with-yield';
import sumGenTask from './tasks/01-gen-sum-task';
import myRunSagasTask from './tasks/02-my-run-sagas';

export default class IterablesGeneratorsYield extends React.Component {
  render() {
    return (
      <div className={styles.iterablesGeneratorsYield}>
        <h3>IterablesGeneratorsYield</h3>
        <div>
          <button onClick={this.runIterableProtocolHandler}>Run Iterable Protocol Example</button>
          <button onClick={this.runYieldGeneratorHandler}>Run Yield/Generator Function Example</button>
          <button onClick={this.runAsyncWithYieldHandler}>Run Async with Yield Example</button>
          <button onClick={this.runSumGenTaskHandler}>Run sumGen Task</button>
          <button onClick={this.runMyRunSagasTaskHandler}>Run myRunSagas Task</button>
        </div>
      </div>
    );
  }

  runIterableProtocolHandler = () => {
    iteratorProtocolExample();
  };

  runYieldGeneratorHandler = () => {
    yieldGeneratorFunctionExample();
  };

  runAsyncWithYieldHandler = () => {
    asyncWithYieldExample();
  };

  runSumGenTaskHandler = () => {
    sumGenTask();
  };

  runMyRunSagasTaskHandler = () => {
    myRunSagasTask();
  };

}
