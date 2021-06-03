import { useState } from "react";
import "./styles.css";

export default function App() {
  const [genre, setGenre] = useState("ScienceFiction");

  const moviesGenre = {
    ScienceFiction: [
      { id: 1, name: "The Core", rating: "5/5" },
      { id: 2, name: "The Day After Tomorrow", rating: "4.9/5" }
    ],
    Action: [
      { id: 1, name: "John Wick", rating: "5/5" },
      { id: 2, name: "Legend of the Red Dragon", rating: "5/5" }
    ],
    Horror: [
      { id: 1, name: "1920", rating: "4.5/5" },
      { id: 2, name: "The Nun", rating: "4/5" }
    ]
  };

  const handleBtnClick = (genre) => {
    setGenre(genre);
  };

  return (
    <div className="App">
      <div className="TextNBtnContainer">
        <h1 className="GoodMoviesText">
          <span>📽</span>️ goodMovies
        </h1>
        <small className="SmallText">
          Checkout my favorite movies. Select a genre to get started
        </small>

        <div className="ButtonContainer">
          <button
            className="Btn"
            onClick={() => handleBtnClick("ScienceFiction")}
          >
            Science fiction
          </button>
          <button className="Btn" onClick={() => handleBtnClick("Action")}>
            Action
          </button>
          <button className="Btn" onClick={() => handleBtnClick("Horror")}>
            Horror
          </button>
        </div>
      </div>
      <div className="GenreListContainer">
        <ul>
          {moviesGenre[genre].map((item) => (
            <li key={item.id} className="GenreListLi">
              <span className="NameSpan">{item.name}</span>
              <small className="RatingSpan">{item.rating}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
