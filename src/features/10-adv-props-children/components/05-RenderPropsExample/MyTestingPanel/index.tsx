import React, { useState } from 'react';

import styles from './styles.module.css';

interface RenderFnParams {
  message: string | null;
  isPassed: boolean;
}

interface IMyTestingPanelProps {
  render: (params: RenderFnParams) => JSX.Element;
}

interface IMyTestingPanelState {
  isModalVisible: boolean;
  isPassed: boolean;
  message: string | null;
}

export default function MyTestingPanel(props: IMyTestingPanelProps): React.ReactElement {
  const [panelState, setPanelState] = useState<IMyTestingPanelState>({
    isModalVisible: false,
    isPassed: false,
    message: null
  });

  const { render } = props;
  const { isModalVisible, isPassed, message } = panelState;

  const handlePassClick = () => {
    setPanelState({
      isModalVisible: true,
      isPassed: true,
      message: `Success ${Math.random()}`
    });
  };

  const handleFailClick = () => {
    setPanelState({
      isModalVisible: true,
      isPassed: false,
      message: `Some Error!! ${Math.random()}`
    });
  };

  const handleResetClick = () => {
    setPanelState({
      isModalVisible: false,
      isPassed: false,
      message: null
    });
  };

  return (
    <div className={styles.myExample}>
      <h3>MyTestingPanel</h3>
      <div>
        <div className={styles.modalContainer}>
          {isModalVisible && render({ message, isPassed })}
        </div>
        <button onClick={handlePassClick} className={styles.success}>Pass</button>
        <button onClick={handleFailClick} className={styles.failure}>Fail</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );

}
