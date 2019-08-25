import React from 'react';
import logo from './logo.svg';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppBody />
      <AppFooter/>
    </div>
  );
}

export default App;
