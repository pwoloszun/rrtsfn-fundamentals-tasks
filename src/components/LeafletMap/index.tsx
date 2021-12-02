/*eslint @typescript-eslint/no-unused-vars: 'off'*/

import React, { useEffect, useRef } from 'react';

import { LatLng } from './viewmodels/lat-lng.interface';
import styles from './styles.module.css';
import { MarkerViewModel } from './viewmodels/marker.vm';
import { MapViewModel } from './viewmodels/map.vm';

interface ILeafletMapProps {
  selected: LatLng | null;
  geoObjects: LatLng[];
  onMarkerClick: (geo: LatLng) => void;
}

// TODO 1: render map
//    map = new MapViewModel(el);

// TODO 2: render markers
//    const marker = map.createMarker(singleGeoObj);

// TODO 3a: handle marker click event
//    marker.on('click', (obj: LatLng) => { ... });

// TODO 3b: highlight selected marker
//    const isHighlighted = marker.matches(someGeo);
//    marker.toggleHighlight(true);


// Useful types:
// HTMLDivElement | null
// MapViewModel | null

export default function LeafletMap(props: ILeafletMapProps): React.ReactElement {
  const { selected, geoObjects, onMarkerClick } = props;
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // elRef.current

  }, []);

  console.log('TODO selected', selected);
  console.log('TODO geoObjects', geoObjects);

  return (
    <div ref={elRef} className={styles.map}>
      leaflet map TODO
    </div>
  );
}
