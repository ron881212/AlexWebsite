import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Episodes from './pages/Episodes';
import './App.css';

function App() {
  return (
    <HashRouter basename='/AlexWebsite'>
        <Switch>
          <Route exact path="/" component={Episodes} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
    </HashRouter>
  );
}

export default App;