//@ts-ignore (No declaration file for this module)
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";

import { ICamera } from "../interfaces/ICamera";
import { Marker, Popup } from "react-leaflet";

export const CameraMarkers = ({ cameras }: { cameras: ICamera[] }) => {
  return (
    <MarkerClusterGroup>
      {cameras.map((camera: ICamera) => {
        return (
          <Marker
            key={camera.identification}
            position={{
              lat: camera.location.lat,
              lng: camera.location.lon,
            }}>
            <Popup maxWidth={500} maxHeight={600} minWidth={400}>
              <div className="popup-container">
                <img
                  src={camera.imageUrl}
                  alt={camera.identification}
                  className="popup-image"></img>
                <div>
                  <button className="popup-button">More details</button>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MarkerClusterGroup>
  );
};
