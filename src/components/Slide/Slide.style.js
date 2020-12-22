import styled from '@emotion/styled'

export const SlideContainer = styled.div`
display:grid;
z-index:100;
position:fixed;
right:10px;
bottom:10px;
height:105px;
width:45px;
background-color:#444444;
border-radius:100px;
border: 2px solid #7ac565;
`;
export const SlideNext = styled.div`

width:30px;
height:30px;
border-radius:50%;
transform: translateY(5px);


`;

export const SlidePrev = styled.div`
width:30px;
height:30px;
border-radius:50%;
transform: translateX(-2px);
`;

export const IconNext = styled.i`

&:after{
    content:'';
    position:absolute;
    border: solid #bbbbbb;
    border-width: 0 1px 1px 0;
    padding:.6em;
    transform: translate(40%, 70%) rotate(315deg) ;
    transition: .3s ease-in all;
}
&:hover{
    &:after{
    border-color: #7ac565;
    }
}
`;

export const IconPrev = styled.i`

&:after{
    content:'';
    position:absolute;
    border: solid #bbbbbb;
    border-width: 0 1px 1px 0;
    padding:.6em;
    transform: translate(100%, 70%) rotate(135deg) ;
    transition: .1s ease-in all;
}
&:hover{
    &:after{
    border-color: #7ac565;
    }
}
`;