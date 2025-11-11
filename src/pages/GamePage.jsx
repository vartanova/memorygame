import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import image from '../assets/1.jpg'


const GamePage = () => {
  const cards = useSelector(state => state.cards.cards)

  const getCardViews = () => {
        let cardViews = [];
        cards.forEach(c => {
            let cardView = <Card 
            key={c.id}
                id={c.id}
                image={c.image}
                imageUp={c.imageUp}
                matched={c.matched}
                onClick={(id) => dispatch(flipUpCard(id))} 
                />
            cardViews.push(cardView);
        });
        return cardViews;
    }

        let cardViews = getCardViews();
  return (
      <div className="flex flex-col gap-10 pt-28 justify-center">
        <div className="flex gap-5 justify-center">
          <div>
            <p>user name:</p>
            {/* сюда значение из инпута модалки */}
          </div>
          <div>
            <p>current points:</p>
            {/* здесь считаем баллы */}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-5 ">
            {cardViews}
          </div>
        </div>
      </div>
  );
};

export default GamePage;
