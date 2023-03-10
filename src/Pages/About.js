import React from "react";

function About() {
  return (
    <div>
      <h2 className="header-about">
        Wenn ihr Lust habt zu connecten wählt eins aus:
      </h2>
      <section className="pokemon">
        {" "}
        <a
          href="https://www.pokemon.com/de/pokedex/bisasam"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-bulbasaur"></i>
        </a>
        <a
          href="https://www.pokemon.com/de/pokedex/schiggy"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-squirtle"></i>
        </a>
        <a
          href="https://www.pokemon.com/de/pokedex/glumanda"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-charmander"></i>
        </a>
      </section>
      <section className="icon-list">
        <a
          href="https://www.linkedin.com/in/q-d-59a659261/"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-icon linkedin is-large"></i>
        </a>
        <a
          href="https://www.github.com"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-icon github is-large"></i>
        </a>
        <a
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-icon instagram is-large"></i>
        </a>
        <a
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="blank"
        >
          {" "}
          <i className="nes-icon twitter is-large"></i>
        </a>
      </section>
      <i className="nes-icon is-large heart"></i>
      <i className="nes-icon is-large heart"></i>
      <i className="nes-icon is-large heart is-empty"></i>
    </div>
  );
}

export default About;
