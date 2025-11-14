  import React from "react";
  import Card from "../components/Card";
  import { useDispatch, useSelector } from "react-redux";
  import { checkMatchedPair, flipUpCard } from "../state/cardSlice";
  import Modal from "../components/Modal";
  import { useNavigate } from "react-router-dom";
  import ResetGame from "../components/ResetGame";

  const GamePage = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const cards = useSelector((state) => state.cards.cards);
    const gameComplete = useSelector((state) => state.cards.gameComplete);
    const pairsFound = useSelector((state) => state.cards.pairsFound);
    const numberClicksInTurn = useSelector(
      (state) => state.cards.numberClicksInTurn
    );
    const playerName = useSelector((state) => state.cards.playerName)

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

    return (
      <div className="flex flex-col gap-10 pt-10 justify-center bg-gradient-to-tr from-[#14366f] via-[#d7ede1] to-[#14366f] min-h-screen">
        <div className="flex gap-10 justify-center text-[#14366f]">
          <div className="flex gap-3 font-bold uppercase">
            <p >user name:</p>
            {playerName}
          </div>
          <div className="flex gap-2.5 font-bold uppercase">
            <p>current points:</p>
            {pairsFound}
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="grid grid-cols-4 gap-5 ">{cardViews}</div>
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h1 className="text-5xl text-[#14366f] font-bold">Игра завершена!</h1>
            <div className="flex gap-5 justify-between">
              <ResetGame setIsOpen={setIsOpen}/>
              <button
                onClick={() => navigate("/statistic")}
                type="button"
                className="bg-[#14366f] text-white py-2 px-3 rounded-2xl hover:shadow-md hover:cursor-pointer"
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
