import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import Header from './components/Header/Header';
import Blog from './pages/Blog'
import { Details } from './pages/Details/Details';
import AboutUs from './pages/Details/About Us/AboutUs';
import { AnimatePresence } from 'framer-motion';



const App = () => {
  return <>
    
    <AnimatePresence mode = "wait">

      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/details/:id" component={Details}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
        </Switch>
      </Router>
      

    </AnimatePresence>
    
  </>
}

export default App
