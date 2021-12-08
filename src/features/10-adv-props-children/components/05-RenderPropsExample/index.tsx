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

  const otherRender = () => {
    return <h1>a QQ!</h1>;
  };

  // TODO: children function

  return (
    <div className={styles.myExample}>
      <MyTestingPanel render={basicRender} />
      <hr />
      <MyTestingPanel render={fancyRender} />
      <hr />
      <MyTestingPanel render={otherRender} />

    </div>
  );
}
