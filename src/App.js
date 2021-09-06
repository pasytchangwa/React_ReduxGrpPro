import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Layout/Header';
import Profile from './components/Profile';
import Missions from './components/Missions';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
          <Switch>
            <Missions />
            <Profile />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
