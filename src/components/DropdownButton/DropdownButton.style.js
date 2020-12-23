import styled from 'styled-components'

export const DropdownButtonContainer = styled.div`
height:50px;
width:50px;
background-color:#7ac565;
border-radius:50%;
position:fixed;
top:10px;
right:10px;
display:flex;
justify-content:center;
align-items:center;
color:#222222;
@media screen and (min-width: 768px){
    display:none;
}
`;

export const Icon = styled.i`
text-align:center;
margin:auto;
font-size:2.5rem;
color:#222222;
`;