import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
        <div className={showHideClassName}>
        <section className="modal-main">
        <button type="button" onClick={handleClose}>
            Close
          </button><br></br>
          {children}
        </section>
      </div>
    );
  };
    


export default Modal;
