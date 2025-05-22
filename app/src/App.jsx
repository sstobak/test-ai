import chicken from './assets/chicken.svg';
import cow from './assets/cow.svg';
import pig from './assets/pig.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 id="gallery-title">Animal SVG Gallery</h1>
      <div className="gallery" role="list" aria-labelledby="gallery-title">
        <div className="animal" role="listitem" tabIndex={0} aria-label="Chicken">
          <img src={chicken} alt="Chicken illustration" tabIndex={-1} />
          <div>Chicken</div>
        </div>
        <div className="animal" role="listitem" tabIndex={0} aria-label="Cow">
          <img src={cow} alt="Cow illustration" tabIndex={-1} />
          <div>Cow</div>
        </div>
        <div className="animal" role="listitem" tabIndex={0} aria-label="Pig">
          <img src={pig} alt="Pig illustration" tabIndex={-1} />
          <div>Pig</div>
        </div>
      </div>
    </>
  );
}

export default App;
