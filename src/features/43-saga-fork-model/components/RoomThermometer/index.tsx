import React from 'react';

import styles from './index.module.css';
import { TemperatureInfo } from '../../../../api/roomTemperatureApi';

const cssStyles = [
  'col-3',
  'card',
  styles.roomThermometer,
];

interface Props {
  values: TemperatureInfo;
  onStart: (id: number) => void;
  onStop: (id: number) => void;
}

export default class RoomThermometer extends React.Component<Props> {

  render() {
    const { temperatures, name } = this.props.values;
    const changeEl = this.renderChange();
    return (
      <div className={cssStyles.join(' ')}>
        <div className="card-body">
          <h6 className="card-title">
            Room Thermometer: {name}
          </h6>
          <h4 className='card-text'>
            Temperature: {temperatures[0]} &deg;C
          </h4>
          <h5>
            Change: {changeEl}
          </h5>
          <div>
            <button className='btn btn-primary'
              onClick={this.startHandler}>Start in BG
            </button>
            <button className='btn btn-secondary'
              onClick={this.stopHandler}>Stop in BG
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderChange() {
    const { temperatures } = this.props.values;
    const [currTemp, prevTemp] = temperatures;
    if (temperatures.length > 1) {
      const changeValue = currTemp - prevTemp;
      const changStyles = [styles.tempChange];
      let changeSign = '';
      if (changeValue > 0) {
        changeSign = '+';
        changStyles.push(styles.tempRisen);
      } else if (changeValue === 0) {
        changeSign = '=';
      } else {
        changStyles.push(styles.tempDropped);
      }
      const text = changeSign + changeValue;
      return (
        <span className={changStyles.join(' ')}>
          {text}
        </span>
      );
    } else {
      return null;
    }
  }

  startHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { values, onStart } = this.props;
    onStart(values.id);
  };

  stopHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { values, onStop } = this.props;
    onStop(values.id);
  };

}
