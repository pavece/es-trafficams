import "./App.css";
import { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";

function App() {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    fetch("./cameras.json")
      .then((response) => response.json())
      .then((data) => {
        setCameras(data);
        console.log(data);
      });
  }, []);

  return <MapComponent cameras={cameras} />;
}

export default App;
