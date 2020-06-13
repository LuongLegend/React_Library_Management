import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'; 
import Login from './Components/Login'
import HomePage from './Components/HomePage'

ReactDOM.render(
  <Router>
    <div>
      {/* <Login />
    <ClickMount name = "LuongLegend"/>
    <ClickHeader/> */}
      <Switch>
        <Route exact={true} path="/" component = {HomePage} />
        <Route exact={true} path="/login" component = {Login} />
      </Switch>
    </div>
  </Router>
  ,
  document.getElementById('root')
);




