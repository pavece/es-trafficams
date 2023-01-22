import "../styles/App.css";
import { useState, useEffect } from "react";
import MapComponent from "../components/map/MapComponent";
import CameraDetailModal from "../components/ui/CameraDetailModal";
import { useModalStore } from "../hooks/useModalStore";
import Navbar from "../components/ui/Navbar";
import { Helmet } from "react-helmet";

function Index() {
  const [cameras, setCameras] = useState([]);
  const { open } = useModalStore();

  useEffect(() => {
    fetch("./cameras.json")
      .then((response) => response.json())
      .then((data) => {
        setCameras(data);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Spanish traffic cams - MAP</title>
      </Helmet>
      <Navbar />
      <MapComponent cameras={cameras} />
      {open && <CameraDetailModal />}
    </>
  );
}

export default Index;
