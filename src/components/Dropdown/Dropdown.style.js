
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'


export const DropdownContainer = styled.div`
    position: fixed;
    z-index:1001;
    width: 100%;
    height:100%;
    background: #444444;
    display: grid;
    align-items:center;
    right:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
`
export const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`
export const DropdownWrapper = styled.div`
`
export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,50px);
    text-align: center;
    margin-bottom:1rem;

`
export const DropdownLink = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000d1a;
    }
`

export const ImageContainer = styled.div`
height:50%;
display:flex;
justify-content:center;
align-items:center;
`;

export const Image = styled.img`
object-fit:cover;
width:40%;
margin-top:4rem;
border: 3px solid #fff;
border-radius: 300px;
box-shadow:0px 10px 10px rgba(0,0,0,0.3);

`;

export const DataContainer = styled.div`

`;

export const Title = styled.h1`
text-align:center;
font-size:2.4rem;
font-weight:600;
color: #fff;
margin-bottom:-20px;
text-shadow:0px 10px 10px rgba(0,0,0,0.3);
transition: .3s transform;

`;

export const Subtitle = styled.h3`
text-align:center;
font-weight:300;
font-size:1.2rem;
color: #bbbbbb;
text-shadow:0px 7px 7px rgba(0,0,0,0.3);
transition: .3s transform;

`;



export const LinksContainer = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;

`;

export const Link = styled.img`
width:40px;
height:40px;
border-radius:5px;
box-shadow:0px 10px 10px rgba(0,0,0,0.3);

`;
export const ButtonCV = styled.button`
display:flex;
height:40px;
align-items:center;
margin:30px auto;
outline:none;
background:transparent;
border: 1px solid #eeeeee;
border-radius:20px;
padding:.2rem 1rem;
color: #eeeeee;
box-shadow:0px 10px 10px rgba(0,0,0,0.3);
`;
