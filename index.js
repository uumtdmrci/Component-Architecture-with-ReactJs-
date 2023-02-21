import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as ServiceWorker from './serviceWorker';
import 'alertifyjs/build/css/alertify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

ServiceWorker.unregister();