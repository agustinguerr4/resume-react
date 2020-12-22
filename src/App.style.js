import styled from '@emotion/styled';

    export const App = styled.div`
    height:100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    background-color:gray;
`;