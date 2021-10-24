import { types } from "./index";
import { TemperatureInfo } from '../../api/roomTemperatureApi';

export function startRoomTracking(roomId: number) {
  return {
    type: types.START_ROOM_TRACKING,
    payload: roomId,
  };
}

export function stopRoomTracking(roomId: number) {
  return {
    type: types.STOP_ROOM_TRACKING,
    payload: roomId,
  };
}

export function createNewRoomDetectorRequest(name: string) {
  return {
    type: types.CREATE_NEW_ROOM_DETECTOR_REQUEST,
    payload: name,
  };
}

export function createNewRoomDetectorSuccess(roomDetector: TemperatureInfo) {
  return {
    type: types.CREATE_NEW_ROOM_DETECTOR_SUCCESS,
    payload: roomDetector,
  };
}

export function stopAllRoomDetectors() {
  return {
    type: types.STOP_ALL_ROOM_DETECTORS,
  };
}

export function fetchRoomRequest(roomId: number) {
  return {
    type: types.FETCH_ROOM_REQUEST,
    payload: roomId
  };
}

export function fetchRoomSuccess(roomDetectorValues: TemperatureInfo) {
  return {
    type: types.FETCH_ROOM_SUCCESS,
    payload: roomDetectorValues
  };
}

export function fetchRoomCancelled(roomId: number) {
  return {
    type: types.FETCH_ROOM_CANCELLED,
    payload: roomId,
  };
}

export function fetchRoomError(error: Error) {
  return {
    type: types.FETCH_ROOM_ERROR,
    error,
  };
}
