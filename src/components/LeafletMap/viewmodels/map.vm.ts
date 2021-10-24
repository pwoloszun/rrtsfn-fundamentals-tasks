import { MarkerViewModel } from './marker.vm';
import { LatLng } from './lat-lng.interface';
import { L } from './leaflet.interface';

const LAYER_URL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

export class MapViewModel {

  private map: any;
  private markers: any[] = [];

  constructor(el: HTMLElement) {
    this.map = L.map(el).setView([52.14, 21.0], 6);
    L.tileLayer(LAYER_URL, {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);
  }

  createMarker(object: LatLng): MarkerViewModel {
    const leafletMarker = L.marker([object.lat, object.lng]).addTo(this.map);
    this.markers.push(leafletMarker);
    return new MarkerViewModel(leafletMarker, object);
  }

  removeAllMarkers() {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });
  }
}
