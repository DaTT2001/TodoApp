import React from 'react';
import ListJob from '../../features/todos/ListJob/ListJob';
import content from './Content.module.css';
const Content = (): JSX.Element => {
  return (
    <div className={content.content}>
      <ListJob/>
    </div>
  );
};

export default Content;
