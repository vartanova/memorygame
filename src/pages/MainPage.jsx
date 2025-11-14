import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../state/cardSlice";

const MainPage = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleStartGame = () => {
    dispatch(setPlayerName(name));
    navigate("/game");
    setIsOpen(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen w-full relative"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #d7ede1 40%, #14366f 100%)",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-2/3 pt-40">
          <div className="flex flex-col items-center gap-3 pb-10 text-[#14366f]">
            <h1 className="text-5xl font-bold">Memory Game</h1>
            <p>Hi! Choose Game Mode!</p>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="bg-[#14366f] text-white w-full py-2.5 rounded-2xl hover:shadow-md hover:cursor-pointer"
            >
              Single Game
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <form
            action="submit"
            className="flex flex-col gap-10"
            onSubmit={() => handleStartGame()}
          >
            <h1 className="font-bold text-4xl text-[#14366f]">
              Type Your Name
            </h1>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="hover:cursor-pointer outline-none w-full border-b-2 required:border-red-400"
            />
            <button
              type="submit"
              className="bg-[#14366f] text-white w-full py-2.5 rounded-2xl hover:shadow-md hover:cursor-pointer"
            >
              Ok
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
