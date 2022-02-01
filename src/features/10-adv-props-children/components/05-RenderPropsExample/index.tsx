import React from 'react';

import styles from './styles.module.css';

import MyTestingPanel from './MyTestingPanel';
import BasicModal, { IBasicModalProps } from './BasicModal';
import FancyModal from './FancyModal';

export default function RenderPropsExample(): React.ReactElement {
  const basicRender = (props: IBasicModalProps) => {
    return <BasicModal {...props} />
  };
  const fancyRender = (props: IBasicModalProps) => {
    return <FancyModal {...props} />
  };

  // TODO: children function

  return (
    <div className={styles.myExample}>
      <MyTestingPanel render={basicRender} />
      <hr />
      <MyTestingPanel render={fancyRender} />
    </div>
  );
}

const names = ['bob', 'ed', 'kate']
names.map((n) => `Hello ${n}!`);
names.map((n) => `--=== Hello ${n}!!!!! === -----`);
