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
  const mapRef = useRef<MapViewModel | null>(null);
  const markersRef = useRef<MarkerViewModel[]>([]);

  useEffect(() => {
    if (elRef.current !== null) {
      mapRef.current = new MapViewModel(elRef.current);
    } else {
      throw new Error('Undefined map cont');
    }
  }, []);

  useEffect(() => {
    mapRef.current!.removeAllMarkers();
    markersRef.current = geoObjects.map((geoObj) => {
      const marker = mapRef.current!.createMarker(geoObj);
      marker.on('click', (obj) => {
        onMarkerClick(obj);
      });
      return marker;
    });
  }, [geoObjects, onMarkerClick]);

  useEffect(() => {
    markersRef.current.forEach((marker) => {
      const isHighlighted = marker.matches(selected);
      marker.toggleHighlight(isHighlighted);
    });
  }, [selected]);

  return (
    <div ref={elRef} className={styles.map}>
      leaflet map TODO
    </div>
  );
}
