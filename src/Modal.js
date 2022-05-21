import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


function Modal({ isActive, onClose, message, contentClassName, textClassName, buttonsClassName, footerClassName }) {
  const modalContentClassName = contentClassName ? `react-modal-for-wealth-health__modal-content ${contentClassName}` : "react-modal-for-wealth-health__modal-content"
  const modalTextClassName = textClassName ? `react-modal-for-wealth-health__modal-text ${textClassName}` : "react-modal-for-wealth-health__modal-text"
  const modalButtonsCloseClassName = buttonsClassName ? `react-modal-for-wealth-health__modal-button-close ${buttonsClassName }` : "react-modal-for-wealth-health__modal-button-close"
  const modalFooterClassName = footerClassName ? `react-modal-for-wealth-health__modal-footer ${footerClassName}` : "react-modal-for-wealth-health__modal-footer"

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
    <div className="react-modal-for-wealth-health__modal" onClick={onClose}>
      <div className={modalContentClassName} onClick={event => event.stopPropagation()}> {/* prevent modal closing when click on modal content */}
        <button onClick={onClose} className={`${modalButtonsCloseClassName} react-modal-for-wealth-health__modal-icon-close`} name="secondary-close">X</button>

        <div className="react-modal-for-wealth-health__modal-body">
          <p className={modalTextClassName}>{message}</p>
        </div>

        <div className={modalFooterClassName}>
          <button onClick={onClose} className={modalButtonsCloseClassName} name="main-close">Close</button>
        </div> 
      </div>
    </div>,
    document.body // replace "document.querySelector("#root")" to write test
  );
}
export default Modal;
