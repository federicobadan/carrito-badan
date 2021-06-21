//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js'

const App = props => {
  return <>
  <NavBar />
  <ItemListContainer />
  <ItemDetailContainer />
  </>
}

export default App;
