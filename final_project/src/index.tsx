import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from  './components';
import './styles.css'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './firebaseConfig'


ReactDOM.render(
  <React.StrictMode>
      <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);



