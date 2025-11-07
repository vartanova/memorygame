import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalAuthorization from "../components/ModalAuthorization";

const MainPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-28">
      <div className="w-3/4 p-10 bg-[#b7e3f5] rounded-2xl">
        <div className="flex flex-col items-center gap-3 pb-10 ">
          <h1 className=" text-5xl">Memory Game</h1>
          <p className="text-center">Hi! Choose Game Mode!</p>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="bg-white w-full py-2.5 rounded-2xl hover:shadow-md hover:cursor-pointer"
          >
            Single Game
          </button>
        </div>
      </div>
      {isOpen && <ModalAuthorization isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MainPage;
