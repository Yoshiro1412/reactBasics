import './assets/css/style.css';
import Card from './components/Card';
import Slider from './components/Slider';
import Next from './components/Next';
import _data from './data/profiles.json';
import {ReactComponent as Logo} from './assets/imgs/Inside_Out_Logo.svg';
import {ReactComponent as Arrow} from './assets/imgs/Arrow.svg';


function App() {
  
  return (
    <div id="yo">
      <Logo className="svg logo"/>
      <Next percentaje={0.25}><Arrow /></Next>
      <div className="debug">
      <Next percentaje={-0.25}><Arrow /></Next>
      </div>
      <Slider>
        {
          _data.map(character => {
            return <Card key={character.name} name={character.name} content={character.info} image={character.image} />
          })
        }
      </Slider>
    </div>
  );
}

export default App;
