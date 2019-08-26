import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Contact from '../Contact/Contact.js'
import Home from '../Home/Home.js'
import Portfolio from '../Portfolio/Portfolio.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Portfolio">Portfolio</Link></p>
          <p><Link to="/Contact">Contact</Link></p>

          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
