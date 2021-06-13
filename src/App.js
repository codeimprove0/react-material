import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import BoxComponent from './component/BoxComponent'
import ContainerComp from './component/ContainerComp'
import TypoComp from './component/TypoComp'
import GridComp from './component/GridComp'
import ThemeComp from './component/ThemeComp' 
import ButtonComp from './component/ButtonComp'
import FabComp from './component/FabComp'
import IconComp from './component/IconComp'

function App() {
  return (
    <div className="App"> 

    <h1>Material UI</h1>
    {/* <Button variant="contained" color="primary">
      Primary
    </Button> */}
    <IconComp/>
    </div>
  );
}

export default App;
