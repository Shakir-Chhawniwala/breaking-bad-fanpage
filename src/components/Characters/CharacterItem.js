import React from "react";
import "./characteritem.css";
import { Link } from "react-router-dom";

const CharacterItem = ({char_id, img, name, occupation, birthday, status, nickname, appearance, portrayed}) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="charcter" />
        </div>
        <div className="card-back">
          <h1> {name} </h1>
          <ul>
            <li>
              <strong>Occupation: </strong>
              {occupation}
            </li>
            <li>
              <strong> Birthday: </strong> {birthday}
            </li>
            <li>
              <strong>Status: </strong> {status}
            </li>
          </ul>
          <Link
            to={{
              pathname: "/characterdetail",
              id: char_id,
              img:img,
              name: name,
              birthday: birthday,
              occupation:occupation,
              status:status,
              nickname: nickname,
              appearance: appearance,
              portrayed: portrayed,
            }}
          >
            <button className="btn">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
