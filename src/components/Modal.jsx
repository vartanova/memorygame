import React from "react";
import { createPortal } from "react-dom";

const modalElement = document.getElementById("modal");

const Modal = ({ setIsOpen, isOpen, children }) => {
  

  return createPortal(
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } flex items-center justify-center h-dvh w-dvw bg-[#2a2c2f53] fixed left-0 top-0 transition duration-200 overflow-y-auto`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" bg-white p-10 rounded-lg w-120 flex flex-col items-center gap-10"
        >
          {children}
        </div>
      </div>
    </>,
    modalElement
  );
};

export default Modal;
