import React from 'react'
import * as s from './Slide.style'
import {menuData} from '../../utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/atom';
import { useHistory } from 'react-router-dom';


const Slide = () => {
    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);

    let history = useHistory();

    const next = () =>{
        if(menuSelected < (menuData.length - 1)){
            setMenuSelected(menuSelected);
            var url = menuData[menuSelected + 1].to;
        }else{
            setMenuSelected(0);
            var url = '/';  
        }
        history.push(url)    
    }

    const prev = () =>{
        if(menuSelected > 0){
            setMenuSelected(menuSelected - 1);
            var url = menuData[menuSelected - 1].to;
        }else{
            setMenuSelected(menuData.length - 1)
            var url = menuData[menuData.length-1].to;  
        }
        
        console.log(url,menuSelected)
        history.push(url)    
    }

    return (
        <s.SlideContainer>
            <s.SlideNext onClick={next}>
                <s.IconNext></s.IconNext>
            </s.SlideNext>
            <s.SlidePrev onClick={prev}>
            <s.IconPrev></s.IconPrev>
            </s.SlidePrev>
        </s.SlideContainer>
            
    )
}

export default Slide
