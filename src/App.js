
import './App.css';

import Navigation from './Component/Navigation';
import  {Shop} from '../src/Component/Pages/Shop.jsx'
import Fotter from './Component/Fotter.jsx';

import Routers from './Component/Routers.js';
function App() {
  return (
<>

  <Navigation/>
  <Routers/>
  

  <Fotter/>
  </>
  );
}

export default App;
