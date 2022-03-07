import React from 'react';

import styles from './styles.module.css';

export interface Option {
  id: number;
  value: string;
}

interface OptionPickerProps {
  label: string;
  options: Option[];
  // onOptionSelect: (option: Option) => void;
}

// TODO: props
export default function OptionPicker(): React.ReactElement {
  return (
    <div className={styles.optionPicker}>
      <span>TODO_PLACEHOLDER</span>
    </div>
  );
}
