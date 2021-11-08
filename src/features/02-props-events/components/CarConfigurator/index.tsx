import React, { useState } from 'react';

import OptionPicker, { Option } from '../OptionPicker';

import { COLORS_DICT, DRIVE_WHEELS_DICT, ENGINES_DICT } from './car-config-dictionaries';
import styles from './styles.module.css';
import produce from 'immer';

interface CarConfiguratorState {
  selectedEngine: Option | null;
  selectedColor: Option | null;
  selectedDriveWheel: Option | null;
}

export default function CarConfigurator(): React.ReactElement {
  const [carConfig, setCarConfig] = useState<CarConfiguratorState>({
    selectedEngine: null,
    selectedColor: null,
    selectedDriveWheel: null,
  });

  const engineChangeHandler = (engine: Option) => {
    setCarConfig((currCarConfig) => {
      const nextCarConfig = produce(currCarConfig, (draft) => {
        draft.selectedEngine = engine;
      });
      return nextCarConfig;
    });
  };

  const colorChangeHandler = (color: Option) => {
    setCarConfig((currCarConfig) => {
      const nextCarConfig = produce(currCarConfig, (draft) => {
        draft.selectedColor = color;
      });
      return nextCarConfig;
    });
  };

  // TODO
  return (
    <div className={styles.carConfigurator}>
      <h5>CarConfigurator</h5>
      <div className={styles.chosenConfig}>
        <h5>Current config</h5>
        <h3>Engine: {carConfig.selectedEngine?.value}</h3>
        <h3>Color: {carConfig.selectedColor?.value}</h3>
        <h3>Drive Wheel: TODO_PLACEHOLDER</h3>
      </div>
      <div>
        <OptionPicker
          label={"Choose engine type"}
          options={ENGINES_DICT}
          onOptionSelect={engineChangeHandler}
        />

        <OptionPicker
          label="Select color"
          options={COLORS_DICT}
          onOptionSelect={colorChangeHandler}
        />

        {/* <OptionPicker
          label="Which one?"
          options={DRIVE_WHEELS_DICT}
          onOptionSelect={ }
        /> */}

      </div>
    </div>
  );
}
