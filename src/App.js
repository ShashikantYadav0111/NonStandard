import Navbar from "./components/Navbar.js";
import Card from "./components/Cards.js";
import Footer from "./components/Footer.js";
import gojoimg from "./images/gojo2.jpg";
import Benimaru from "./images/benimaru.jpg";
import Diablo from "./images/diablo.jpg";
import reigen from "./images/reigen.jpg";
import karma from "./images/karma.jpg";
import kakashi from "./images/kakashi.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="contentarea">
          <div className='row'>
              <Card title="Satoro Gojo" animename='Jujutsu kaisen' charimg={gojoimg} quote="It'll be fine.I am the strongest there is,After all" />

              <Card title="Diablo" animename='That time i got reincarnated as a slime' charimg={Diablo} quote='i have been away from living world too long,I shall enjoy my time time here to the fullest' />

              <Card title="Beniamru Shinemon" animename='fire Force' charimg={Benimaru} quote='Anger begets anger.If you turn your bloodlust on someone,that bloodlust is guaranteed to come right back at you.' />
          </div>
          <br/>
          <div className='row'>
              <Card title="Karma Akabane" animename='The Assassination Classroom' charimg={karma} quote="IF you're going to fight, you have to shoot first and ask question later." />

              <Card title="Kakashi Hatake" animename='Naruto' charimg={kakashi} quote="This place makes me think about the mistakes I've made in the past... and I've made a lot." />

              <Card title="Reigen Arataka" animename='Mob Pyscho 100' charimg={reigen} quote="When things Go south,It's Ok to run away." />
              
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
