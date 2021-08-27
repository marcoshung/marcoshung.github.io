import React from 'react'
import logo from './logo.svg';
import './App.css';
import { 
  Route,
  Switch
} from 'react-router-dom'
import { Home, About }  from './components/pages'
import { TypeWriter } from './components/TypeWriter'
import { NavBar, Menu } from './components';
import { motion } from "framer-motion"

export const App = () => {
  return(
    <>
    <motion.div className="App">
      <header className="App-header">
      <Menu></Menu>

      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/about">
          <About/>
        </Route>
      </Switch>
      </header>
    </motion.div>
    </>
  )
}

