import React, { useEffect, useState } from 'react';
import LeafletMap from 'src/components/LeafletMap';

interface City {
  name: string;
  lat: number;
  lng: number;
}

const CITIES_DATA: City[] = [
  { name: 'Lublin', lat: 51.15, lng: 22.34 },
  { name: 'Rzeszów', lat: 50.0409, lng: 21.9992 },
  { name: 'Łódź', lat: 51.45, lng: 19.27 },
  { name: 'Kraków', lat: 50.06465, lng: 19.94498 },
  { name: 'Warszawa', lat: 52.14, lng: 21.0 },
  { name: 'Szczecin', lat: 53.25, lng: 14.35 }
];

export default function Cities(): React.ReactElement {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    setTimeout(() => setCities(CITIES_DATA), 2200);

    setTimeout(() => setSelectedCity(cities[1]), 3200);
  }, [cities]);

  const markerClickHandler = (city: any) => {
    setSelectedCity((selectedCity: City | null) => {
      return selectedCity === city ? null : city;
    });
  };

  return (
    <div>
      <h3>Cities</h3>
      <div>
        Selected: {selectedCity ? selectedCity.name : null}
      </div>
      <LeafletMap
        selected={selectedCity}
        geoObjects={cities}
        onMarkerClick={markerClickHandler}
      />
    </div>
  );
}
