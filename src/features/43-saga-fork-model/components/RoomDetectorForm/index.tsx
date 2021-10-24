import React from 'react';

import styles from './index.module.css';

interface Props {
  onCreateNew: (name: string) => void;
  onStopAll: () => void;
}

export default class RoomDetectorForm extends React.Component<Props> {
  private nameInputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <div className={styles.roomDetectorForm}>
        <form>
          <div>
            Name:
            <input ref={this.nameInputRef} />
          </div>
          <div>
            <button onClick={this.createNewHandler}>Create New</button>
            <button onClick={this.stopAllHandler}>Stop All</button>
          </div>
        </form>
      </div>
    );
  }

  createNewHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { onCreateNew } = this.props;
    onCreateNew((this.nameInputRef.current as HTMLInputElement).value);
  };

  stopAllHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { onStopAll } = this.props;
    onStopAll();
  };

}
