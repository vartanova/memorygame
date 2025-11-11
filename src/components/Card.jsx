import React from "react";
import cardBack from "../assets/cardBack.jpg";


const Card = ({ key, id, image, imageUp, matched, onClick }) => {
  return (
    <div
      className="w-30 h-30 cursor-pointer"
      onClick={() => onClick(id)}
      // onClick={onClick}

    >
      <div
        className="relative h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: imageUp || matched ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        
      >
        <div
          className="absolute w-full h-full rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={cardBack} alt="back" className="w-full h-full object-cover" />
        </div>

        <div
          className="absolute w-full h-full rounded-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img src={image} alt="front" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Card;