import React from 'react';
import '../styles/home.css';
import rabbit from '../imgs/rabbit.jpg';
import floki from '../imgs/floki.png';
import rocket from '../imgs/rocket.png';
const Home = () => {
  return (
    <>

      <div id="home-bg">
        
        <div className="home-description">
          <h1>FLOKING</h1>
          <p>
            A hype memecoin backed by solid diamond hands community in the
            binance smart chain
          </p>
        
        </div>
        <div className="home-logo">
          <img src={floki} alt="img" width={300} height={300}></img>
        </div>
      </div>
    </>
  );
};

export default Home;
