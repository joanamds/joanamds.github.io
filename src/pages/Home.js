import React, { useContext } from 'react';
import '../styles/Home.css';
import developer from '../images/barbie-desenvolvedora.png';
import LanguageContext from '../context/LanguageContext';
import '../styles/Title.scss'

function Home() {
  const { isEnglish } = useContext(LanguageContext);
  
  return (
    <div className="home-page" id="home">
      <div className="home-container">
        <div className="typewriter">
          <h1>{isEnglish ? 'Hello World! My name is Joana' : 'Hello World! Meu nome é Joana'}</h1>
        </div>
        <div className="image-container">
          <img src={developer} alt="female developer" width="500" className="image-developer" />
        </div>
        </div>
      </div>
  );
}

export default Home;