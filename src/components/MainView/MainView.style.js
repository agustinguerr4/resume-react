import styled from 'styled-components';

export const MainViewContainer = styled.div`
background-color:#222222;
grid-column:5/13;
grid-row: 1;
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;
color: #fff;

@media screen and (max-width: 768px){
    grid-column:1/13;
}
`;