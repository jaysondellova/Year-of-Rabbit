import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';
import rabbit from '../imgs/rabbit.jpg';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img src={rabbit} alt="img" width={100} height={100}></img>
      <nav ref={navRef}>
        <a href="#home-bg">Home</a>
        <a href="#token-container">Tokenomics</a>
        <a href="#roadmap-container">Roadmap</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
