import { LatLng } from './lat-lng.interface';
import { L } from './leaflet.interface';

const HIGHLIGHTED_ICON = 'assets/marker-icon-2x.png';

export type MarkerEventListener = (obj: LatLng) => void;

const ICONS = {
  default: new L.Icon.Default(),
  highlighted: new L.icon({
    iconUrl: HIGHLIGHTED_ICON,
    iconSize: [50, 82],
    iconAnchor: [25, 82],
    popupAnchor: [-3, -76],
  })
};

export class MarkerViewModel {
  private marker: any;
  private object: LatLng;

  constructor(leafletMarker: any, object: LatLng) {
    this.marker = leafletMarker;
    this.object = object;
  }

  on(eventName: string, listenerFn: MarkerEventListener): void {
    this.marker.on(eventName, () => {
      listenerFn(this.object);
    });
  }

  toggleHighlight(isHighlighted: boolean) {
    this.marker.setIcon(isHighlighted ? ICONS.highlighted : ICONS.default);
  }

  matches(object: LatLng | null): boolean {
    return this.object === object;
  }
}
