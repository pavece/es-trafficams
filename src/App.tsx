import "./App.css";
import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import CameraDetailModal from "./components/CameraDetailModal";
import { useModalStore } from "./hooks/useModalStore";
import Navbar from "./components/Navbar";

function App() {
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
      <Navbar />
      <MapComponent cameras={cameras} />
      {open && <CameraDetailModal />}
    </>
  );
}

export default App;
