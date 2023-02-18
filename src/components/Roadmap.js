import React from 'react'
import "../styles/roadmap.css"
const Roadmap = () => {
  return (
    <div className='Roadmap'>
      <div classname="detail">
        <h1>Roadmap</h1>
        <p>Let’s look at the path FLOKING will take on it's journey to take over the defi world.</p>
      </div>
      <div className='roadmap-container'>
      <div classname="roadmap-body">
        <div className='roadmap-bg-pink'>
        <h1>To Do</h1>
        <h2>DApp Stake</h2>
        <h2>1st Air Drop</h2>
        <h2>Community Giveaway</h2>
        </div>
      </div>
      <div classname="roadmap-body">
      <div className='roadmap-bg-green'>
        <h1>In Progress</h1>
        <h2>DApp Burn</h2>
        <h2>Dapp Claim</h2>
        <h2>Community Building</h2> </div>
      </div>
      <div classname="roadmap-body">
      <div className='roadmap-bg-yellow'>
        <h1>Complete</h1>
        <h2>Tokenomics</h2>
        <h2>Website Design</h2> </div>
        
      </div>
      </div>
    </div>
  )
}

export default Roadmap