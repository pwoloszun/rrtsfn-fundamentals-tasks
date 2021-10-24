import React from 'react';

import styles from './index.module.css';

const cssClasses = [
  'd-flex d-flex-column',
  styles.mySpinner
].join(' ');

const sizeStyles: any = {
  small: { width: '1rem', height: '1rem' },
  normal: {},
  large: { width: '4rem', height: '4rem' },
};

export default class MySpinner extends React.Component<any> {

  render() {
    const { size = 'normal', text = null } = this.props;
    const actualSize = sizeStyles[size];
    const textContent = text ? (<span className={styles.spinnerText}>{text}</span>) : null;
    return (
      <div className={cssClasses} role="spinbutton">
        <div className="spinner-border" style={actualSize}>
          {/* <span className="sr-only">Loading...</span> */}
        </div>
        {textContent}
      </div>
    );
  }

}
