import { useState } from "react";

import { useTranslation } from "react-i18next";

import { useModalStore } from "../../hooks/useModalStore";
import Skeleton from "./Skeleton";

const CameraDetailModal = () => {
  const { data, closeModal } = useModalStore();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [t] = useTranslation("global");

  return (
    <div
      className="modal-p-container"
      onClick={(e) => {
        if (e.currentTarget != e.target) return;
        closeModal();
      }}>
      <div className="modal-container">
        <div>
          {!imageLoaded && <Skeleton />}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              className="modal-image"
              style={{ display: !imageLoaded ? "hidden" : "inherit" }}
              src={data.imageUrl}
              alt=""
              onLoad={() => {
                setImageLoaded(true);
              }}
            />
          </div>
        </div>
        <div className="camera-data-container">
          <div className="camera-data-info">
            <p>
              {t("cameraDetailsModal.city-data")}: {data.location.city}
            </p>
            <p>
              {t("cameraDetailsModal.serial-number-data")}: {data.serialNumber}
            </p>
            <p>
              {t("cameraDetailsModal.identification")}: {data.identification}
            </p>
          </div>
          <div className="camera-data-buttons-container">
            <button
              className="camera-detail-modal-close-btn"
              onClick={closeModal}>
              {t("cameraDetailsModal.close-btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetailModal;
