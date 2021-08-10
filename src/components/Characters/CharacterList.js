import React from "react";
import "./characterlist.css"
import CharacterItem from "./CharacterItem"

const CharacterList = ({ characters }) => {
  return (
    <section className="cards">
      {characters.map((character) => {
        return <CharacterItem {...character} key={character.char_id} />;
      })}
    </section>
  );
};

export default CharacterList;
