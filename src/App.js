import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import Header from './components/Header/Header';

const App = () => {
  return <>
    
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>

  </>
}

export default App
