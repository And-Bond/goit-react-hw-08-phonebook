import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './redux/store'
import  {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate } from 'redux-persist/integration/react'
import {persistor} from './redux/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter basename='/goit-react-hw-08-phonebook'>
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />   
  {/* </React.StrictMode> */}
  </Provider>
  </BrowserRouter>
  </PersistGate>
);