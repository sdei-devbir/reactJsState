import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

import dashboardRoutes from "./routes/dashboard"; 
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        <NavLink
            to="/list"
            className="nav-link"
            activeClassName="active"
          >
         
            <p>List</p>
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
          >
         
            <p>About</p>
          </NavLink>
          
          
        </header>
        <Switch>
            {dashboardRoutes.map((prop, key) => {              
              
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
      </div>
    );
  }
}

export default App;
