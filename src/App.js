import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./components/Characters/CharacterList"
import Pagination from "./components/Pagination/Pagination"
import Header from "./components/Header/Header"
import CharacterCard from "./components/Characters/CharacterCard"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentCharacters = characters.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      setCharacters(res.data);
    };
    fetchData();
  }, []);
  
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/" exact>
          <CharacterList characters={currentCharacters} />
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={characters.length}
            pageSize={postPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Route>
        <Route path="/characterdetail" exact>
          <CharacterCard characters={currentCharacters} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
