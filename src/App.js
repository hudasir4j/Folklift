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

const App = () => {
  return <>
    
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/details/:id" component={Details}></Route>
      </Switch>
    </Router>

  </>
}

export default App
