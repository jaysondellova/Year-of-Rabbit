import React from 'react';
import '../styles/home.css';
import rabbit from '../imgs/rabbit.jpg';
const Home = () => {
  return (
    <>
      <div id="home-bg">
        \
        <div className="home-description">
          <h1>Year of Rabbit</h1>
          <p>
            a lucky memecoin backed by solid diamond hands community in the
            binance smart chain
          </p>
          <div className="chart">
            <a href="https://t.me/YearofrabbitBSC" target="_blank">
              Join Us
            </a>
            <a
              href="https://poocoin.app/tokens/0x5028f3014c9e7aa1b561a41f31aada1b5b84be80?fbclid=IwAR0RnuKv_ypX88R4PuRg7PCIzPej2wZ5qrZX_zZdKnCocQssEfybb_Ob6Iw"
              target="_blank"
            >
              Chart
            </a>
          </div>
        </div>
        <div className="home-logo">
          <img src={rabbit} alt="img" width={300} height={300}></img>
        </div>
      </div>
    </>
  );
};

export default Home;
