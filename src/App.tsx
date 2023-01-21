import "./App.css";
import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import CameraDetailModal from "./components/CameraDetailModal";
import { useModalStore } from "./hooks/useModalStore";

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
      <MapComponent cameras={cameras} />
      {open && <CameraDetailModal />}
    </>
  );
}

export default App;
