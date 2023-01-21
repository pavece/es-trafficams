import { useModalStore } from "../hooks/useModalStore";

const CameraDetailModal = () => {
  const { data, closeModal } = useModalStore();

  return (
    <div
      className="modal-p-container"
      onClick={(e) => {
        if (e.currentTarget != e.target) return;
        closeModal();
      }}>
      <div className="modal-container">
        <div>
          <img className="modal-image" src={data.imageUrl} alt="" />
        </div>
        <div className="camera-data-container">
          <div className="camera-data-info">
            <p>City: {data.location.city}</p>
            <p>Serial number: {data.serialNumber}</p>
            <p>Identification: {data.identification}</p>
          </div>
          <div className="camera-data-buttons-container">
            <button className="camera-detail-modal-close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetailModal;
