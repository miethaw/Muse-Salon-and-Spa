import React from 'react';
import {MediaQueryProvider} from 'react-media-query-hoc'
import logo from './logo.svg';
import './App.css';

import AppRoute from '../src/AppRoute.js'

const customQueries = {
  mobile: "screen and  (max-width:767px)" /* (max-width: 640px) */,
  tablet: "screen and (min-width:768px) and (max-width: 1024px)",
  desktop: "screen and (min-width:1025px) and (min-width: 1441px)",
  fontFamily: "Cabin"
};

function App() {
  return (
  <div className='container-fluid p-0 m-0 '>
    <MediaQueryProvider>
      <AppRoute />
    </MediaQueryProvider>
  
 
</div>
  );
}

export default App
