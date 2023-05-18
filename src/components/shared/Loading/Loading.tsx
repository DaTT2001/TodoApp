import React from 'react';
import loading from './Loading.module.css';

const Loading = (): JSX.Element => {
  return (
    <>
      <div className={loading.loadingSpinner}><div className={loading.ldio}>
        <div></div>
      </div></div>
    </>
  );
};

export default Loading;
