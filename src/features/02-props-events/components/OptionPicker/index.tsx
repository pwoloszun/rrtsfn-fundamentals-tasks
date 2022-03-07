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
  // selectedOption?: Option;
}

export default function OptionPicker(props: OptionPickerProps): React.ReactElement {
  const { label, options } = props;

  return (
    <div className={styles.optionPicker}>
      <span>{label}</span>
      {
        options.map((op) => {
          return (
            <button key={op.id}>
              {op.value}
            </button>
          );
        })
      }
    </div>
  );
}
