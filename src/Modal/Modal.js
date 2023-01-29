import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
        <div className={showHideClassName}>
        <section className="modal-main bg-orange-500 transition-all duration-300">
          <div>
          <button type="button" onClick={handleClose} className="btn-close">
            X
          </button>
          </div>
          {children}
        </section>
      </div>
    );
  };
    


export default Modal;
