import React, { useContext } from "react";
import UserContext from "../context/useContext";

function NameListInput() {
  const user = useContext(UserContext);
  return (
    <div className="spieler-input-container nes-field">
      <label htmlFor="name_field">Spielerliste</label>
      <textarea
        className="nes-input"
        id="name_field"
        onChange={(e) => {
          const playerString = e.target.value;
          const list = playerString
            .split(",")
            .filter((str) => {
              return str.trim().length;
            })
            .map((str) => {
              return str.trim();
            });
          user[1](list);
        }}
      />
    </div>
  );
}

export default NameListInput;
