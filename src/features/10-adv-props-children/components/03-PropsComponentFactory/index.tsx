import React, { Component } from 'react';

import styles from './styles.module.css';

import VideoEntry from './VideoEntry';
import PhotoEntry from './PhotoEntry';

const componentsMap = {
  video: VideoEntry,
  photo: PhotoEntry
};

interface PropsComponentFactoryProps {
  entryId: keyof typeof componentsMap;
}

export default class PropsComponentFactory extends Component<PropsComponentFactoryProps> {
  render() {
    const { entryId } = this.props;
    const SpecyficEntry = componentsMap[entryId];
    return (
      <div className={styles.myPropsExample}>
        <h3>PropsComponentFactory</h3>
        <SpecyficEntry />
      </div>
    );
  }
}
