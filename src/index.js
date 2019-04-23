import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./js/store/index";
import indexRoutes from "./routes/index";

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Provider store={store}>
    <HashRouter>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route to={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
