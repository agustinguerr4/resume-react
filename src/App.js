import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import '../src/style.scss'
import * as s from './App.style.js'
import CardResume from './components/CardResume/CardResume';
import MainView from './components/MainView/MainView';
import Slide from './components/Slide/Slide';

import {menuData} from './utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from './Recoil/atom';
import { useHistory } from 'react-router-dom';

function App() {

  const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
  const history = useHistory();
  const setMenu = (index) =>{
    setMenuSelected(index)
  }
  menuData.map((item,index) => { item.to === history.location.pathname && setMenu(index) })
  

  return (
      <s.App>
        <Sidebar />
        <CardResume />
        <MainView />
        <Slide></Slide>
      </s.App>
  );
}

export default App;
