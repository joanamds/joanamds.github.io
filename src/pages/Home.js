import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import developer from '../images/developer-female.png';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <img src={ developer } alt="female developer" width="500" className="image-developer"/>
      </div>
    </div>
  );
}

export default Home;