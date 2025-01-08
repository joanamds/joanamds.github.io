import React from 'react';
import '../styles/Home.css';
import '../styles/Title.scss'
const developer = require('../images/barbie-desenvolvedora.png');

function Home() {
  return (
    <div className="home-page" id="home">
      <div className="home-container">
        <div className="typewriter">
          <h1>Hello World!</h1>
        </div>
        <div className="image-container">
          <img src={developer} alt="female developer" width="500" className="image-developer" />
        </div>
        </div>
      </div>
  );
}

export default Home;