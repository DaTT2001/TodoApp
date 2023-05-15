import React from 'react';
import Form from './components/Form/Form';
import ListJob from './components/ListJob/ListJob';
import app from './App.module.css';
import Header from './components/Header/Header';

function App (): JSX.Element {
  return (
    <div className={app.app}>
      <Header/>
      <Form/>
      <ListJob/>
    </div>
  );
}

export default App;
