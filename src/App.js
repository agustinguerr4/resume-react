import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import '../src/style.scss'
import * as s from './App.style.js'
import CardResume from './components/CardResume/CardResume';

function App() {
  return (
    <s.App>
      <Sidebar/>
      <CardResume/>
    </s.App>
  );
}

export default App;
