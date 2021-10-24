import React from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../../../store/43-roomDetectors';
import { TemperatureInfo } from '../../../../api/roomTemperatureApi';

import RoomThermometer from '../../components/RoomThermometer';
import RoomDetectorForm from '../../components/RoomDetectorForm';

interface Props {
  allRoomsDetectors: TemperatureInfo[];
  createNewRoomDetector: (name: string) => void;
  startRoomTracking: (roomId: number) => void;
  stopRoomTracking: (roomId: number) => void;
  stopAllRoomDetectors: () => void;
}

class RoomsTrackingPanelCmp extends React.Component<Props> {
  render() {
    return (
      <div>
        <h3>Rooms Tracking Panel</h3>
        <div>
          <RoomDetectorForm onCreateNew={this.createNewHandler}
            onStopAll={this.stopAllHandler}
          />
        </div>
        <hr />
        <div className='row'>
          {this.renderRoomThermometers()}
        </div>
      </div>
    );
  }

  renderRoomThermometers() {
    const { allRoomsDetectors } = this.props;
    return allRoomsDetectors.map((roomDetector) => {
      return (
        <RoomThermometer values={roomDetector}
          onStart={this.startHandler}
          onStop={this.stopHandler}
          key={roomDetector.id}
        />
      );
    });
  }

  createNewHandler = (name: string) => {
    const { createNewRoomDetector } = this.props;
    createNewRoomDetector(name);
  };

  stopAllHandler = () => {
    const { stopAllRoomDetectors } = this.props;
    stopAllRoomDetectors();
  };

  startHandler = (roomId: number) => {
    const { startRoomTracking } = this.props;
    startRoomTracking(roomId);
  };

  stopHandler = (roomId: number) => {
    const { stopRoomTracking } = this.props;
    stopRoomTracking(roomId);
  };
}

const mapStateToProps = (state: any) => {
  return {
    allRoomsDetectors: selectors.selectRoomDetectors(state),
  }
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    createNewRoomDetector(name: string) {
      dispatch(actions.createNewRoomDetectorRequest(name));
    },
    stopAllRoomDetectors() {
      dispatch(actions.stopAllRoomDetectors());
    },
    startRoomTracking(roomId: number) {
      dispatch(actions.startRoomTracking(roomId));
    },
    stopRoomTracking(roomId: number) {
      dispatch(actions.stopRoomTracking(roomId));
    },
  }
};

const RoomsTrackingPanel = connect(mapStateToProps, mapDispatchToProps)(RoomsTrackingPanelCmp);
export default RoomsTrackingPanel;
