import React, { useState } from 'react'
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
import Dropdown from './components/Dropdown/Dropdown';
import DropdownButton from './components/DropdownButton/DropdownButton';

function App() {

  const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  menuData.map((item,index) => { item.to === history.location.pathname && setMenuSelected(index); return(menuSelected)})
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <s.App>
        <DropdownButton
          toggle={toggle}
        />
        <Dropdown 
     isOpen={isOpen}
     toggle={toggle}
     />
        <Sidebar />
        <CardResume />  
        <MainView />
        <Slide/>
        <Dropdown/>
      </s.App>
  );
}

export default App;
