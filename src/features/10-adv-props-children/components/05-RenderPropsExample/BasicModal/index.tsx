import React from 'react';

import styles from './styles.module.css';

export interface IBasicModalProps {
  isPassed: boolean;
  message: string | null;
}

export default function BasicModal(props: IBasicModalProps): React.ReactElement {
  const { isPassed, message } = props;
  const cssStyles = [styles.basicModal];
  if (isPassed) {
    cssStyles.push(styles.success);
  } else {
    cssStyles.push(styles.failure);
  }
  return (
    <div className={cssStyles.join(' ')}>
      Result: {message}
    </div>
  );
}
