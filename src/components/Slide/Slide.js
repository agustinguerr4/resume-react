import React from 'react'
import * as s from './Slide.style'

const Slide = () => {

    const next = () =>{
        console.log('va pa lante')
    }

    const prev = () =>{
        console.log('va pa tra')
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
