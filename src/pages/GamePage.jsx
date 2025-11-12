import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { checkMatchedPair, flipUpCard, initGame } from "../state/cardSlice";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const GamePage = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);
  const gameComplete = useSelector((state) => state.cards.gameComplete);
  const pairsFound = useSelector((state) => state.cards.pairsFound);
  const numberClicksInTurn = useSelector(
    (state) => state.cards.numberClicksInTurn
  );

  if (pairsFound === 7 && numberClicksInTurn === 2) {
    dispatch(checkMatchedPair());
  }

  const getCardViews = () => {
    let cardViews = [];
    cards.forEach((c) => {
      let cardView = (
        <Card
          key={c.id}
          id={c.id}
          image={c.image}
          imageUp={c.imageUp}
          matched={c.matched}
          onClick={() => dispatch(flipUpCard(c.id))}
        />
      );
      cardViews.push(cardView);
    });
    return cardViews;
  };

  let cardViews = getCardViews();

  if (gameComplete) {
    setIsOpen(true);
  }

  const handleNewGame = () => {
    dispatch(initGame());
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-10 pt-10 justify-center">
      <div className="flex gap-5 justify-center">
        <div>
          <p>user name:</p>
          {/* сюда значение из инпута модалки */}
        </div>
        <div className="flex gap-2.5">
          <p>current points:</p>
          {pairsFound}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <div className="grid grid-cols-4 gap-5 ">{cardViews}</div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h1 className=" text-5xl">Игра завершена!</h1>
          <div className="flex w-full gap-5">
            <button
              onClick={() => handleNewGame()}
              type="button"
              className="bg-[#b7e3f5] w-full py-2 px-3 rounded-2xl hover:shadow-md hover:cursor-pointer"
            >
              Начать заново
            </button>
            <button
              onClick={() => navigate("/statistic")}
              type="button"
              className="bg-[#b7e3f5] w-full py-2 px-3 rounded-2xl hover:shadow-md hover:cursor-pointer"
            >
              Посмотреть статистику
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GamePage;
