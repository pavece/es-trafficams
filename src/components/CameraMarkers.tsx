//@ts-ignore (No declaration file for this module)
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import { useTranslation } from "react-i18next";

import { ICamera } from "../interfaces/ICamera";
import { Marker, Popup } from "react-leaflet";
import { useModalStore } from "../hooks/useModalStore";
import { useRef } from "react";
import { cameraIcon } from "../map mods/cameraIcon";

export const CameraMarkers = ({ cameras }: { cameras: ICamera[] }) => {
  const { openModal } = useModalStore();
  const [t] = useTranslation("global");

  const popupRef = useRef<any>();

  return (
    <MarkerClusterGroup>
      {cameras.map((camera: ICamera) => {
        return (
          <Marker
            key={camera.identification}
            icon={cameraIcon}
            position={{
              lat: camera.location.lat,
              lng: camera.location.lon,
            }}>
            <Popup ref={popupRef} maxWidth={500} maxHeight={600} minWidth={400}>
              <div className="popup-container">
                <img
                  src={camera.imageUrl}
                  alt={camera.identification}
                  className="popup-image"></img>
                <div>
                  <button
                    className="popup-button"
                    onClick={() => {
                      openModal(camera);
                      popupRef.current._closeButton.click();
                    }}>
                    {t("cameraMarkers.more-details-btn")}
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MarkerClusterGroup>
  );
};
