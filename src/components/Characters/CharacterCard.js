import React, { useState, useEffect } from "react";
import "./charactercard.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const CharacterCard = () => {
  const [quotes, setQuotes] = useState([]);
  let query = useLocation();
  const author = query.name.toString().split(" ");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/quote/random?author=${author[0]}+${author[1]}`
      );
      setQuotes(res.data);
    };

    fetchData();
  }, [author]);

  return (
    <div className="character-detail">
      <div className="img-section">
        <img src={query.img} alt="Character-img" />
      </div>
      <div className="info-section">
        <ul>
          <li>
            <strong>Name: </strong>
            {query.name}
          </li>
          <li>
            <strong>Date of birth: </strong>
            {query.birthday}
          </li>
          <li>
            <strong>Occupation: </strong>
            {query.occupation}
          </li>
          <li>
            <strong>Status of the character: </strong>
            {query.status}
          </li>
          <li>
            <strong>Nickname: </strong>
            {query.nickname}
          </li>
          <li>
            <strong>Actor: </strong>
            {query.portrayed}
          </li>
          <li>
            <strong>Seasons in which the character appears: </strong>
            {query.appearance.toString().split("")}
          </li>
          <li>
            <strong>All quotes by the character: </strong>
            {quotes.map((quote) => (
              <div key={quote.quote_id}>{quote.quote}</div>
            ))}
          </li>
        </ul>

        <Link to="/">
          <button className="btn-back">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
