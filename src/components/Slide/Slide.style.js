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
box-shadow: -6px 2px 5px rgba(0,0,0,0.2);
transition: .3s ease all;
&:hover{
    transform:translateY(-4px);
    box-shadow: -6px 2px 5px rgba(0,0,0,0.5);
    transition: .3s ease all;
}

@media screen and (max-width: 768px){

background-color:#000000;
}
`;
export const SlideNext = styled.div`

width:45px;
height:45px;
border-radius:50%;
transform: translateY(5px);
`;

export const SlidePrev = styled.div`
width:45px;
height:45px;
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
    cursor:pointer;
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
    cursor:pointer;
    &:after{
    border-color: #7ac565;
    }
}
`;