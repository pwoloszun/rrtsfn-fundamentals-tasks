import React from 'react';

import styles from './styles.module.css';

interface IMyPageLayoutProps {
  myValue: number;
}

export default function MyPageLayout(
  props: React.PropsWithChildren<IMyPageLayoutProps>
): React.ReactElement {
  const { myValue, children } = props;

  return (
    <div className={styles.myComp}>
      <h3>MyPageLayout (val: {myValue})</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
