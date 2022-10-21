import React from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
