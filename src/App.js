import './App.css';
import Header from './Site/Header/Header';
import Section from "./Site/Section/Section";
import Footer from "./Site/Footer/Footer";
import imagen from "./image.png";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Footer />
      </div>
      <div className='extra'>
        <img src={imagen} className='tmpTan' />
      </div>
    </div> 
  );
}

export default App;
