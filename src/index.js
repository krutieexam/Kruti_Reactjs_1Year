import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from './ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from '../src/store';
import Routering from './store/Routes';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routering />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
