import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactPortal } from "../ReactPortal";
import "./Modal.css";

function Modal({ children, isOpen, handleClose }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null); //Cerrar con la tecla Esc
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
            <button onClick={handleClose} className="close-btn">
              <img src="https://img.icons8.com/color/48/000000/close-window.png"/>
            </button>
            {children}
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
export default Modal;
