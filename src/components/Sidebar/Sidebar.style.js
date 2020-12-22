import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    grid-column:1;
    grid-row: 1;
    background-color: #222222;
    width:100%;
`;

export const MenuItemsContainer = styled.div`
flex-direction: column;
display:flex;
align-items:center;

`

export const MenuItem = styled.div`
border-bottom: solid 1px #333333;
width:100%;
color:#eeeeee;
display:block;
font-size:.7rem;
text-align:center;
padding:1rem 0rem;
&:hover{
    color: #7ac565;
}
`;

export const Icon = styled.i`
display:block;
font-size:2.3rem;
margin-bottom:-1rem;
&:active{
    color: #7ac565;
}`;