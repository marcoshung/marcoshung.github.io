import React from 'react'
import logo from './logo.svg';
import './App.css';
import { 
  Route,
  Switch
} from 'react-router-dom'
import { Home, About }  from './components/pages'
import { Menu } from './components';
import { motion } from "framer-motion"

export const App = () => {
  return(
    <>
    <div className ="bg-image"></div>
    <Menu/>

    <motion.div className="App">
    
      <header className="App-header">
      <div className="content">
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/about">
          <About/>
        </Route>
      </Switch>
      </div>
      </header>
    </motion.div>
    </>
  )
}

