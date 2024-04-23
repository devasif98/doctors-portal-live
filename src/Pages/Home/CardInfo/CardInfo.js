import React from "react";

const CardInfo = ({card}) => {
    const {icon, title, describe, bgClass} = card;
  return (
    <div>
      <div className={`card items-center card-side shadow-xl p-6 h-40 text-white ${bgClass}`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{describe}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
