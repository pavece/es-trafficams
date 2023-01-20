import { useMapModeStore } from "../hooks/useMapModeStore";

const ViewModeControls = () => {
  const { mode, setMode } = useMapModeStore();

  return (
    <div className=" view-mode-controls-container">
      <button
        className="view-mode-controls-button btn-left"
        style={{
          backgroundColor: mode == "normal" ? "rgba(0, 0, 0, 0.658)" : "",
        }}
        onClick={() => {
          setMode("normal");
        }}>
        Normal
      </button>
      <button
        className="view-mode-controls-button btn-right "
        style={{
          backgroundColor: mode == "satellite" ? "rgba(0, 0, 0, 0.658)" : "",
        }}
        onClick={() => {
          setMode("satellite");
        }}>
        Satellite
      </button>
    </div>
  );
};

export default ViewModeControls;
