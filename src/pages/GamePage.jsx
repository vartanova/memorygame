import React from "react";
import Card from "../components/Card";
import { Provider, useDispatch, useSelector } from "react-redux";


const GamePage = ({ setName }) => {
  const dispatch = useDispatch();

  return (
      <div className="flex flex-col gap-10 pt-28 justify-center">
        <div className="flex gap-5 justify-center">
          <div>
            <p>user name:</p>
            {/* сюда значение из инпута модалки */}
            {setName}
          </div>
          <div>
            <p>current points:</p>
            {/* здесь считаем баллы */}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-5 ">
            <Card />
          </div>
        </div>
      </div>
  );
};

export default GamePage;
