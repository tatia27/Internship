import React from "react";
import "./favorite.css";
import left from "./../../assets/Left.svg";
import right from "./../../assets/Right.svg";
import Card from "../card/card";

function Favorite() {
  return (
    <div className="favorite__interns">
      <h3 className="user-profiles__favorite-internhip">
        Избранные стажировки
      </h3>
      <div className="favorite__interns__card">
        <Card></Card>
        <Card></Card>
      </div>
      <div className="favorite__interns__more">
        <div className="favorite__interns__more__item">
          <img src={left} alt="Стрелка влево"></img>
        </div>
        <div className="favorite__interns__more__item">
          <img src={right} alt="Стрелка вправо"></img>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
