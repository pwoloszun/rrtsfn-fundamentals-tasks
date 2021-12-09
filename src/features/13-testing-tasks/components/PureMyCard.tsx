import React from 'react';

import styles from './PureMyCard.module.css';

export interface IPureMyCardProps {
  header?: React.ReactElement | string;
  content?: React.ReactElement | string;
  footer?: React.ReactElement | string;
}

export default function PureMyCard(props: IPureMyCardProps): React.ReactElement {
  const { header, content, footer } = props;

  return (
    <div className={styles.mcContainer}>
      <div className={styles.mcHeader}>
        {header}
      </div>
      <div className={styles.mcContent}>
        {content}
      </div>
      <div className={styles.mcFooter}>
        {footer}
      </div>
    </div>
  );
}
