import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { playerGame } from "../state/cardSlice";

const MainPage = ({isOpen, setIsOpen}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [name, setName] = useState("");

  const handleStartGame = () => {
    navigate("/game")
    setIsOpen(false)
    dispatch(playerGame(name))
  }

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
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h1 className=" text-5xl">Type Your Name</h1>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="hover:cursor-pointer outline-none w-full border-b-2 py-3.5 pb-0"
          />
          <button
            onClick={() => handleStartGame()}
            type="button"
            className="bg-[#b7e3f5] w-full py-2.5 rounded-2xl hover:shadow-md hover:cursor-pointer"
          >
            Ok
          </button>
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
