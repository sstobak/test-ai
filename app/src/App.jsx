import chicken from './assets/chicken.svg';
import cow from './assets/cow.svg';
import pig from './assets/pig.svg';
import sheep from './assets/sheep.svg';
import hippo from './assets/hippo.svg';
import goat from './assets/goat.svg';
import horse from './assets/horse.svg';
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
        <div className="animal" role="listitem" tabIndex={0} aria-label="Sheep">
          <img src={sheep} alt="Sheep illustration" tabIndex={-1} />
          <div>Sheep</div>
        </div>
        <div className="animal" role="listitem" tabIndex={0} aria-label="Hippo">
          <img src={hippo} alt="Hippo illustration" tabIndex={-1} />
          <div>Hippo</div>
        </div>
        <div className="animal" role="listitem" tabIndex={0} aria-label="Goat">
          <img src={goat} alt="Goat illustration" tabIndex={-1} />
          <div>Goat</div>
        </div>
        <div className="animal" role="listitem" tabIndex={0} aria-label="Horse">
          <img src={horse} alt="Horse illustration" tabIndex={-1} />
          <div>Horse</div>
        </div>
      </div>
    </>
  );
}

export default App;
