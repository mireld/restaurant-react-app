import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
// import Intro from './components/intro'
// import App from './App';
// import Footer from './components/footer'
import './index.css';
import 'bulma/css/bulma.css'

ReactDOM.render(
  <React.StrictMode>
      <Header />
  </React.StrictMode>,
  document.getElementById('root')
);
