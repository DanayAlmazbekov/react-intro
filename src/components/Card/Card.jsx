import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, activeCard, setActiveCard }) => {
  // console.log(item, activeCard, setActiveCard);
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        border: activeCard === item.id ? "2px solid black" : "none",
        cursor: "pointer",
        padding: "40px",
        borderRadius: "10px",
      }}
      onClick={() => setActiveCard(item.id)}>
      <h2>{item.model}</h2>
      <img className="car-image" src={item.image} alt="" />
      <div>
        {like ? (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="40px"
            src="https://w7.pngwing.com/pngs/1012/545/png-transparent-love-heart-art-love-s-love-heart-presentation-thumbnail.png"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="40px"
            src="http://cdn.onlinewebfonts.com/svg/img_510341.png"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
