import React from 'react';

const defaultStyles = { width: '100%' };

export default class MyProgress extends React.Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated"
          style={defaultStyles}
        />
      </div>
    );
  }

}
