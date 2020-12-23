import styled from 'styled-components';

export const SidebarContainer = styled.div`
    grid-column:1;
    grid-row: 1;
    background-color: #222222;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:1000;
    min-height:100%;
    height:fit-content;
    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const MenuItemsContainer = styled.div`
flex-direction: column;
display:flex;
align-items:center;
`

export const MenuItem = styled.div`

${p => p.index !== p.last && 'border-bottom: solid 1px #333333;'}
width:100%;
color: ${p => p.isSelected === p.index ? '#7ac565;' : '#eeeeee;'};
display:block;
font-size:.7rem;
text-align:center;
padding:1rem 0rem;
transition: .3s all;
&:hover{
    color: #7ac565;
}
`;

export const Icon = styled.i`
display:block;
font-size:2.3rem;
margin-bottom:-1rem;
`;
