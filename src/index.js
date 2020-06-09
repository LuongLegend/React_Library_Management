import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import ClickMount from './Components/ClickMount'
import ClickHeader from './Components/ClickHeader'
import Login from './Components/Login/Login'
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
      <ClickMount name="LuongLegend" />
      <ClickHeader />
    </div>
  </Router>
  ,
  document.getElementById('root')
);




