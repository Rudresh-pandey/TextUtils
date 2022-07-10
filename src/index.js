import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import About from './components/About';
import TextForm from './components/TextForm';
import reportWebVitals from './reportWebVitals';
import { Router , Route , Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router history={history}>
      <Switch>
        <Route exact path="/"  component={App} />
        <Route path="/home" component={TextForm} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
