import React from "react";

const About = () => {
  return (
    <div className="container text-light">
      <h1>Pokedex</h1>
      <div></div>
      <h3>Que es esta aplicacion?</h3>
      <p>
        This website provides a RESTful API interface to highly detailed objects
        built from thousands of lines of data related to Pokémon. We
        specifically cover the video game franchise. Using this website, you can
        consume information on Pokémon, their moves, abilities, types, egg
        groups and much, much more.
      </p>

      <h2>What is an API?</h2>
      <p>
        An API (Application Programming Interface) is a contract that allow
        developers to interact with an application through a set of interfaces.
        In this case, the application is a database of thousands of
        Pokémon-related objects, and the interfaces are URL links.
      </p>
    </div>
  );
};

export default About;
