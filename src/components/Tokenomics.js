import React from 'react';
import '../styles/tokenomics.css';
const Tokenomics = () => {
  return (
    <div id="token-container">
      <h1>Tokenomics</h1>
      <div className="buynsell">
      <div className='token-bg-orange'>
        <div className="buy">
          <h2>5% BUY</h2>
          <h2>2% LP</h2>
          <h2>3% MARKETING</h2>
          </div>
        </div>
        <div className="sell">
        <div className='token-bg-violet'>
          <h2>5% SELL</h2>
          <h2>2% LP</h2>
          <h2>3% MARKETING</h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
