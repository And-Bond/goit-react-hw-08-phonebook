import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './redux/store'
import  {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/goit-react-hw-08-phonebook'>
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />   
  {/* </React.StrictMode> */}
  </Provider>
  </BrowserRouter>
);
