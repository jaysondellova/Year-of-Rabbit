import React from 'react';
import '../styles/tokenomics.css';
const Tokenomics = () => {
  return (
    <div id="token-container">
      <h1>Tokenomics</h1>
      <div className="buynsell">
        <div className="buy">
          <h2>3% BUY</h2>
          <h2>1% LP</h2>
          <h2>2% MARKETING</h2>
        </div>
        <div className="sell">
          <h2>3% SELL</h2>
          <h2>1% LP</h2>
          <h2>2% MARKETING</h2>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
