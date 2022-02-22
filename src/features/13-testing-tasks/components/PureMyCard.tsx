import React from 'react';

import styles from './PureMyCard.module.css';

interface IPureMyCardProps {
  header?: React.ReactElement | string;
  content?: React.ReactElement | string;
  footer?: React.ReactElement | string;
}

export default function PureMyCard(props: IPureMyCardProps): React.ReactElement {
  const { header, content, footer } = props;

  return (
    <div className={styles.mcContainer}>
      <div role="region" aria-label="Card Header" className={styles.mcHeader}>
        {header}
      </div>
      <div role="region" aria-label="Card Body" className={styles.mcContent}>
        {content}
      </div>
      <div role="region" aria-label="Card Footer" className={styles.mcFooter}>
        {footer}
      </div>
    </div>
  );
}
