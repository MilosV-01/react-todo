import ParticlesBg from 'particles-bg';
import ToDo from './containers/ToDo';

function App() {
    return (
      <>
        <ToDo />
        <ParticlesBg type="square" bg={true} color="#9149E9" num="120" />
      </>
    )
  }

export default App;