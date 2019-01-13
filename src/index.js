import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import DropdownCrimes from './DropdownCrimes';
import * as serviceWorker from './serviceWorker';
import DropdownYears from "./DropdownYears";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<DropdownYears />, document.getElementById('dropdown-year'));
ReactDOM.render(<DropdownCrimes />, document.getElementById('dropdown-crimes'));
=======
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

>>>>>>> 74441eee2e7ac829007db09a16494fa56dfbaeba
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
