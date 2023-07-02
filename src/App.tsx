import React from 'react';
import Layout from './layout/Layout';
import app from './App.module.css';

function App (): JSX.Element {
  return (
    <div className={app.app}>
      <Layout />
    </div>
  );
}
export default App;
