import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import '../src/style.scss'
import * as s from './App.style.js'
import CardResume from './components/CardResume/CardResume';
import MainView from './components/MainView/MainView';

function App() {
  return (
    <s.App>
      <Sidebar/>
      <CardResume/>
      <MainView/>
    </s.App>
  );
}

export default App;
