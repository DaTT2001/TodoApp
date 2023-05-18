import React from 'react';
import Layout from './pages/Layout';
import app from './App.module.css';

function App (): JSX.Element {
  return (
    <div className={app.app}>
      <Layout />
    </div>
  );
}
export default App;
