import { useEffect, type ReactNode } from "react";
import "../pop-up/style.css";
import { createPortal } from "react-dom";

type modalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
  handleClose : ()=> void
};

const ModalPOPUP = ({  children , handleClose}: modalProps) => {



  return createPortal(
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="close-btn">
                  <button onClick={handleClose}>X</button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-popup") as HTMLElement
  );
};

export default ModalPOPUP;
