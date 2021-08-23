import React from 'react'
import logo from './logo.svg';
import './App.css';
import { 
  Route,
  Switch
} from 'react-router-dom'
import { TypeWriter } from './components/TypeWriter'
import { NavBar, Menu } from './components';
export const App = () => {
  return(
    <div className="App">
      <header className="App-header">
      <Menu></Menu>

      <Switch>
        <Route exact path = "/">
          <NavBar/>
          <TypeWriter/>
        </Route>
        <Route path = "/about">
          <p>Home</p>
        </Route>
      </Switch>
      </header>
    </div>
  )
}

