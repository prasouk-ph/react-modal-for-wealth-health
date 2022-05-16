import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


function Modal({ isActive, onClose, message }) {
  function closeModalWithKeyboard(event) {
    if (event.key === "Escape") {
      document.body.removeEventListener('keydown', closeModalWithKeyboard)
      onClose()
    }
  }


  function addEventListener() {
    document.body.addEventListener('keydown', closeModalWithKeyboard)
  }

  useEffect(() => {
    addEventListener()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive])

  if (!isActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={event => event.stopPropagation()}> {/* prevent modal closing when click on modal content */}
        <button onClick={onClose} className="modal-button-close modal-icon-close" name="secondary-close">X</button>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-button-close" name="main-close">Close</button>
        </div> 
      </div>
    </div>,
    document.body // replace "document.querySelector("#root")" to write test
  );
}
export default Modal;
