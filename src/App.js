import Navbar from './components/Navbar';
import Home from './components/Home';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tokenomics />
      <Roadmap />
      <Footer/>
    </div>
  );
}

export default App;
