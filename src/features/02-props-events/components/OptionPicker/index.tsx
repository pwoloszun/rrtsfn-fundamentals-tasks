import React from 'react';

import styles from './styles.module.css';

export interface Option {
  id: number;
  value: string;
}

interface OptionPickerProps {
  label: string;
  options: Option[];
  onOptionSelect: (option: Option) => void;
}

// TODO: props
export default function OptionPicker(
  props: OptionPickerProps
): React.ReactElement {
  const { label, options, onOptionSelect } = props;

  return (
    <div className={styles.optionPicker}>
      <span>{label}</span>
      {
        options.map((opt) => {
          const btnCickHandler = () => onOptionSelect(opt);

          return (
            <button key={opt.id} onClick={btnCickHandler}>
              {opt.value}
            </button>
          );
        })
      }
    </div>
  );
}
