import React from 'react';
import '../styles/roadmap.css';
const Roadmap = () => {
  return (
    <div id="roadmap-container">
      <div className="square">
        <h1>Roadmap</h1>
        <span>
          {' '}
          <h2>Phase 1</h2>
        </span>
        <h2>Develop website</h2>
        <h2>Create telegram group</h2>
        <h2>300 holders</h2>
        <h2>Start of marketing</h2>
        <br />
        <span>
          <h2>phase 2</h2>
        </span>
        <h2>Coming soon</h2>
        <br />
        <span>
          <h2>Phase 3</h2>
        </span>
        <h2>Coming soon</h2>
      </div>
    </div>
  );
};

export default Roadmap;
