import { FC, useRef, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { useMapModeStore } from "../hooks/useMapModeStore";
import { CameraMarkers } from "./CameraMarkers";
import ViewModeControls from "./ViewModeControls";

import { ICamera } from "../interfaces/ICamera";

type Props = {
  cameras: ICamera[];
};

const modes = {
  normal: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attr: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attr: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
};

const MapComponent: FC<Props> = ({ cameras }) => {
  const tilesRef = useRef<any>();
  const { mode } = useMapModeStore();

  useEffect(() => {
    tilesRef.current?.setUrl(
      mode == "normal" ? modes.normal.url : modes.satellite.url
    );
  }, [mode]);

  return (
    <>
      <MapContainer
        center={{ lat: 40.416775, lng: -3.70379 }}
        zoom={7}
        maxZoom={15}
        minZoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100vh", width: "100vw" }}>
        <TileLayer
          ref={tilesRef}
          attribution={
            mode == "normal" ? modes.normal.attr : modes.satellite.attr
          }
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CameraMarkers cameras={cameras} />
        <ViewModeControls />
      </MapContainer>
    </>
  );
};

export default MapComponent;
