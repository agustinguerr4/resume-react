import React from 'react'
import * as s from './Slide.style'
import {menuData} from '../../utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/atom';


const Slide = () => {
    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);

    const next = () =>{
        menuSelected < (menuData.length - 1) ? setMenuSelected(menuSelected + 1) : setMenuSelected(0)
        //console.log(menuSelected)
    }

    const prev = () =>{
        !!menuSelected ? setMenuSelected(menuSelected - 1) : setMenuSelected(menuData.length - 1)
        //console.log(menuSelected)
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
