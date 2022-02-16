import React, { Component } from 'react';

import styles from './styles.module.css';

import VideoEntry from './VideoEntry';
import PhotoEntry from './PhotoEntry';

// lookup table
const componentsMap = {
  video: VideoEntry,
  photo: PhotoEntry
};

interface PropsComponentFactoryProps {
  entryId: keyof typeof componentsMap;
}

export default function PropsComponentFactory(props: PropsComponentFactoryProps) {
  const { entryId } = props;
  const SpecyficEntry = componentsMap[entryId];
  return (
    <div className={styles.myPropsExample}>
      <h3>PropsComponentFactory</h3>
      <SpecyficEntry />
    </div>
  );
}
