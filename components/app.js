import React from 'react';
import Header from './header';

const Main = ( { children } ) => {
  return (
    <div>
      <Header/>
      { children }
    </div>
  );
};

export default Main;


