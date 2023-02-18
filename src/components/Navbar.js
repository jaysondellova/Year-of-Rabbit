import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';
import floki from '../imgs/floki.png';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img src={floki} alt="img" width={100} height={100}></img>
      <nav ref={navRef}>
        <a href="#home-bg">Home</a>
        <a href="#token-container">Tokenomics</a>
        <a href="#roadmap-container">Roadmap</a>
<a href="https://t.me/FLOKINGOFFICIALBSC"><img src="https://img.icons8.com/ios/50/null/telegram-app.png" alt='img'/></a>
<a href="https://poocoin.app/tokens/0xa84fe14d16cd270ac0e29c3d6f2ca4ad3dffaa42"><img alt='img' src="https://img.icons8.com/external-victoruler-outline-victoruler/64/null/external-poop-baby-victoruler-outline-victoruler.png"/></a>
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
