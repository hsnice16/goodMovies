import { useState } from "react";
import "./styles.css";

export default function App() {
  const [genre, setGenre] = useState("ScienceFiction");

  const moviesGenre = {
    ScienceFiction: [
      {
        id: 1,
        name: "The Core",
        description:
          "The Core is a 2003 American science fiction disaster film directed by Jon Amiel. The film focuses on a team whose mission is to drill to the center of the Earth and set off a series of nuclear explosions in order to restart the rotation of the Earth's core.",
        rating: "5/5"
      },
      {
        id: 2,
        name: "The Day After Tomorrow",
        description:
          "The Day After Tomorrow is a 2004 American science fiction disaster film directed, co-produced, and co-written by Roland Emmerich. It depicts catastrophic climatic effects following the disruption of the North Atlantic Ocean circulation in a series of extreme weather events that usher in global cooling and lead to a new ice age.",
        rating: "4.9/5"
      },
      {
        id: 3,
        name: "Gravity",
        description:
          "Gravity is a 2013 science fiction thriller film directed by Alfonso Cuarón, who also co-wrote, co-edited, and produced the film. It stars Sandra Bullock and George Clooney as American astronauts who are stranded in space after the mid-orbit destruction of their Space Shuttle, and attempt to return to Earth.",
        rating: "4/5"
      }
    ],
    Action: [
      {
        id: 1,
        name: "John Wick",
        description:
          "John Wick is an American neo-noir action thriller media franchise created by screenwriter Derek Kolstad and owned by Lionsgate. Keanu Reeves plays John Wick, a retired hitman who becomes active again in his quest for vengeance.",
        rating: "5/5"
      },
      {
        id: 2,
        name: "Legend of the Red Dragon",
        description:
          "The New Legend of Shaolin (released in the United Kingdom as Legend of the Red Dragon and in the Philippines as Once Upon a Time in China-4) is a 1994 Hong Kong martial arts film directed by Wong Jing and Corey Yuen, and produced by Jet Li, who also stars in the lead role",
        rating: "5/5"
      },
      {
        id: 3,
        name: "Wonder Woman",
        description:
          "Wonder Woman is a 2017 American superhero film based on the DC Comics character of the same name, produced by DC Films in association with RatPac Entertainment and Chinese company Tencent Pictures and distributed by Warner Bros. Pictures.",
        rating: "4.9/5"
      }
    ],
    Horror: [
      {
        id: 1,
        name: "1920",
        description:
          "1920 is a 2008 Indian horror film written and directed by Vikram Bhatt. Filmed in Hindi, the plot revolves around the events surrounding a married couple living in a haunted house in the year 1920.",
        rating: "4.5/5"
      },
      {
        id: 2,
        name: "The Nun",
        description:
          "The Nun is a 2018 American gothic supernatural horror film directed by Corin Hardy and written by Gary Dauberman, from a story by Dauberman and James Wan.",
        rating: "4/5"
      },
      {
        id: 3,
        name: "The Conjuring 2",
        description:
          "The Conjuring 2 (known in the UK and Ireland as The Conjuring 2: The Enfield Case) is a 2016 American supernatural horror film, directed by James Wan.",
        rating: "4.5/5"
      }
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
              <small className="Description">{item.description}</small>
              <small className="Rating">{item.rating}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
