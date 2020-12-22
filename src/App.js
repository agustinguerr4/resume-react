import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import '../src/style.scss'
import * as s from './App.style.js'
import CardResume from './components/CardResume/CardResume';
import MainView from './components/MainView/MainView';
import Slide from './components/Slide/Slide';

function App() {

  return (
    <s.App>
      <Sidebar/>
      <CardResume/>
      <MainView/>
      <Slide isItemSelected={isItemSelected}></Slide>
    </s.App>
  );
}

export default App;
