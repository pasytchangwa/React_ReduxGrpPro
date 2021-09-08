import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './App.css';
import Navbar from './components/layout/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Provider store={store}>
            <Route exact path="/" component={Rockets} />
            <Route exact path="/missions" component={Missions} />
            <Route exact path="/myprofile" component={Profile} />
          </Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
