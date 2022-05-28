import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Filter from './components/Filter';
import Restaurent from './components/Restaurent';
import userInfo from "./data/userInfo.json"
import offers from "./data/offer.json"
import restaurent from "./data/restaurent.json"

function App() {
  return (
    <>
    <Navbar{...userInfo.location}/>
    <Offer offers={offers}/>
    <section className='near-you'>
      <Filter/>
      <Restaurent restaurent={restaurent}/>
    </section>
    </>
  );
}

export default App;
