import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet.markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { ICamera } from "../interfaces/ICamera";

export const Markers = ({ cameras }: { cameras: ICamera[] }) => {
  const map = useMap();

  useEffect(() => {
    const markers = window.L.markerClusterGroup();
    cameras.forEach((camera: ICamera) => {
      const imageComponent = `<div class="popup-container"><img src="${camera.imageUrl}" class="popup-image" width="auto"></img><a href="#showdetails${camera.identification}"><button>More details</button></a></div>`;
      const marker = L.marker({
        lat: camera.location.lat,
        lng: camera.location.lon,
      });
      return markers.addLayer(
        marker.bindPopup(imageComponent, {
          maxWidth: 500,
          minWidth: 450,
        })
      );
    });
    map.addLayer(markers);
  }, [cameras]);

  return null;
};
