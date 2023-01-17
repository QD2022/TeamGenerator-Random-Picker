import React, { useContext, useState } from "react";
import NameListInput from "../components/NameListInput";
import shuffle from "../utils/shuffle";
import UserContext from "../context/useContext";

function TeamGenerator() {
  const list = useContext(UserContext);
  const [numberOfTeams, setNumberOfTeams] = useState();
  const [teams, setTeams] = useState([]);

  const handleGenerator = () => {
    const shuffledArray = shuffle(list[0]);
    if (!numberOfTeams || numberOfTeams < 0) {
      setTeams([]);
    } else {
      const numberOfPeoplePerTeam = shuffledArray.length / numberOfTeams;
      const splittedTeams = [];
      for (let i = 0; i < numberOfTeams; i++) {
        // die Logik hier (Beispiel teamzahl 3) ist 0*3 = 0, (0+1=1)*3 = 3. slice(0,3)
        // (i=1): 1*3 = 3, (1+1=2)*3 = 6. slice(3,6)
        splittedTeams.push(
          shuffledArray.slice(
            i * numberOfPeoplePerTeam,
            (i + 1) * numberOfPeoplePerTeam
          )
        );
      }
      setTeams(splittedTeams);
      // console.log(splittedTeams);
    }
  };
  return (
    <div className="container">
      <h2 className="header-team">Teamgröße</h2>
      <input
        className="nes-input"
        type="number"
        onChange={(e) => {
          setNumberOfTeams(e.target.value);
        }}
      />
      <NameListInput />
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={handleGenerator}
      >
        Zufällige Teams
      </button>
      <div className="lists">
        {teams.map((team, index) => {
          return (
            <ul className="nes-list" key={index}>
              {" "}
              <p>Team {index + 1}</p>
              {team.map((member, index) => {
                return <li key={index}>{member}</li>;
              })}
              <hr />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default TeamGenerator;
