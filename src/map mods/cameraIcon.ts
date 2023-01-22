import L from "leaflet";

import markerIcon from "/marker.svg";

export const cameraIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [9, -30],
  shadowSize: [0, 0],
});
