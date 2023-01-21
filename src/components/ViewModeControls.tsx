import { useTranslation } from "react-i18next";
import { useMapModeStore } from "../hooks/useMapModeStore";

const ViewModeControls = () => {
  const { mode, setMode } = useMapModeStore();
  const [t, i18n] = useTranslation("global");

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
        {t("mapControls.normal-button")}
      </button>
      <button
        className="view-mode-controls-button btn-right "
        style={{
          backgroundColor: mode == "satellite" ? "rgba(0, 0, 0, 0.658)" : "",
        }}
        onClick={() => {
          setMode("satellite");
        }}>
        {t("mapControls.satellite-button")}
      </button>
    </div>
  );
};

export default ViewModeControls;
