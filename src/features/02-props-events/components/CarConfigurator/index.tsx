import React from 'react';

import OptionPicker, { Option } from '../OptionPicker';

import { COLORS_DICT, DRIVE_WHEELS_DICT, ENGINES_DICT } from './car-config-dictionaries';
import styles from './styles.module.css';

interface CarConfiguratorState {
  selectedEngine: Option | null;
  selectedColor: Option | null;
  selectedDriveWheel: Option | null;
}

//TODO
// const initialState = {
//   selectedEngine: null,
//   selectedColor: null,
//   selectedDriveWheel: null,
// };

export default function CarConfigurator(): React.ReactElement {
  // TODO: handle optionSelect event(s)

  // TODO
  return (
    <div className={styles.carConfigurator}>
      <h5>CarConfigurator</h5>
      <div className={styles.chosenConfig}>
        <h5>Current config</h5>
        <h3>Engine: TODO_PLACEHOLDER</h3>
        <h3>Color: TODO_PLACEHOLDER</h3>
        <h3>Drive Wheel: TODO_PLACEHOLDER</h3>
      </div>
      <div>
        <OptionPicker
          label="Choose engine type"
          options={ENGINES_DICT}
        />

        <OptionPicker
          label="Select color"
          options={COLORS_DICT}
        />

      </div>
    </div>
  );
}
