import L from "leaflet";

import markerIcon from "/marker.svg";

export const cameraIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [50, 50],
  iconAnchor: [16, 32],
  popupAnchor: [0, -20],
  shadowSize: [0, 0],
});
