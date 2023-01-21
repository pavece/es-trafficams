import { useState } from "react";
import { useModalStore } from "../hooks/useModalStore";
import Skeleton from "./Skeleton";

const CameraDetailModal = () => {
  const { data, closeModal } = useModalStore();
  const [imageLoaded, setImageLoaded] = useState(false);

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
        <div className="camera-data-container">
          <div className="camera-data-info">
            <p>City: {data.location.city}</p>
            <p>Serial number: {data.serialNumber}</p>
            <p>Identification: {data.identification}</p>
          </div>
          <div className="camera-data-buttons-container">
            <button
              className="camera-detail-modal-close-btn"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetailModal;
