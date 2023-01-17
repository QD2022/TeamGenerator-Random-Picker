import React, { useContext, useState } from "react";
import NameListInput from "../components/NameListInput";
import shuffle from "../utils/shuffle";
import UserContext from "../context/useContext";

function RandomPicker() {
  const list = useContext(UserContext);
  const [playerNumber, setPlayerNumber] = useState();
  const [randomPlayer, setRandomPlayer] = useState([]);
  // console.log(list[0]);

  // logik für randompicker
  const handleClickPick = () => {
    const shuffledArray = shuffle(list[0]);
    // console.log(shuffledArray);
    if (playerNumber === undefined || playerNumber < 0) {
      setRandomPlayer([]);
    } else {
      const slicedArray = shuffledArray.slice(0, playerNumber);
      setRandomPlayer(slicedArray);
      // console.log(slicedArray);
    }
  };
  return (
    <div className="container">
      <h2>Wieviele zufällige Spieler:</h2>
      <input
        className="nes-input"
        type="number"
        onChange={(e) => {
          setPlayerNumber(e.target.value);
        }}
      />
      <NameListInput />
      <button
        type="button"
        className="nes-btn is-success"
        onClick={handleClickPick}
      >
        Auswählen
      </button>
      <div className="lists">
        <ul className="nes-list">
          {/* index vergeben, damit durchs mappen jeder ein unique key bekommt */}
          {randomPlayer.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
          <hr />
        </ul>
      </div>
    </div>
  );
}

export default RandomPicker;
