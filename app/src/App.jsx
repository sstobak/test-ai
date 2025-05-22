import chicken from './assets/chicken.svg';
import cow from './assets/cow.svg';
import pig from './assets/pig.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Animal SVG Gallery</h1>
      <div className="gallery">
        <div className="animal">
          <img src={chicken} alt="Chicken" />
          <div>Chicken</div>
        </div>
        <div className="animal">
          <img src={cow} alt="Cow" />
          <div>Cow</div>
        </div>
        <div className="animal">
          <img src={pig} alt="Pig" />
          <div>Pig</div>
        </div>
      </div>
    </>
  );
}

export default App;
