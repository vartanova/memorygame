import React from "react";
import { useDispatch } from "react-redux";
import { initGame } from "../state/cardSlice";
import { useNavigate } from "react-router-dom";

const ResetGame = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewGame = () => {
    setIsOpen(false);
    navigate("/game");
    dispatch(initGame());
  };
  return (
    <div>
      <button
        onClick={() => handleNewGame()}
        type="button"
        className="bg-[#14366f] text-white w-full py-2 px-3 rounded-2xl hover:shadow-md hover:cursor-pointer"
      >
        Начать заново
      </button>
    </div>
  );
};

export default ResetGame;
