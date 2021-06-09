//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'

const App = props => {
  return <>
  <NavBar />
  <ItemListContainer />
  </>
}

export default App;
