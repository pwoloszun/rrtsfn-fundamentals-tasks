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

  const divRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapViewModel | null>(null);
  const markersRef = useRef<MarkerViewModel[]>([]);

  useEffect(() => {
    renderMap(divRef, mapRef);
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (map !== null) {
      renderMarkers(map, markersRef, geoObjects, onMarkerClick);
    } else {
      throw new Error(`smth wrong`);
    }
  }, [geoObjects, onMarkerClick, selected]);

  useEffect(() => {
    console.log('selected EFFECT call:', selected, geoObjects);
    highlightSelected(markersRef, selected);
  }, [selected, markersRef.current]);

  return (
    <div ref={divRef} className={styles.map}>
      leaflet map TODO
    </div>
  );
}


function highlightSelected(markersRef: any, selected: any) {
  markersRef.current.forEach((marker: any) => {
    const isHighlighted = marker.matches(selected);
    marker.toggleHighlight(isHighlighted);
  });
}

function renderMarkers(map: any, markersRef: any, geoObjects: any[], onMarkerClick: any) {
  map.removeAllMarkers();
  markersRef.current = geoObjects.map((geo) => {
    const marker = map.createMarker(geo);
    marker.on('click', (obj: any) => {
      onMarkerClick(obj);
    });
    return marker;
  });
}

function renderMap(divRef: any, mapRef: any) {
  const divDom = divRef.current;
  if (divDom !== null) {
    mapRef.current = new MapViewModel(divDom);
  } else {
    throw new Error(`smth wrong`);
  }
}
