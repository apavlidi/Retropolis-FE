import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Board from './components/Board/Board';
import Home from './components/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/:id" component={Board} />
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
