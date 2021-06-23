//import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return <>
  <BrowserRouter>
  <NavBar />
    <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='/categoria/:categoriaID'>
          <ItemListContainer />
        </Route>
        <Route exact path='/item/:itemID'>
          <ItemDetailContainer />
        </Route>
    </Switch>
  </BrowserRouter>
  </>
}

export default App;
