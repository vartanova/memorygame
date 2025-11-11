import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shuffleCard } from "../state/cardSlice";

const ModalAuthorization = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("")

  const dispatch = useDispatch(shuffleCard());

  return (
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
          <h1 className=" text-5xl">Type Your Name</h1>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="hover:cursor-pointer outline-none w-full border-b-2 py-3.5 pb-0"
          />
          <button
            onClick={() => navigate("/game")}
            type="button"
            className="bg-[#b7e3f5] w-full py-2.5 rounded-2xl hover:shadow-md hover:cursor-pointer"
          >
            Ok
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalAuthorization;
