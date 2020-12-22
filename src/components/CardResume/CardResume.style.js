import styled from '@emotion/styled';

export const CardResumeContainer = styled.div`
grid-column:2/5;
grid-row: 1;
background-color:#444444;

`;

export const ImageContainer = styled.div`
height:50%;
display:flex;
justify-content:center;
align-items:center;
`;

export const Image = styled.img`
object-fit:cover;
width:60%;
margin-top:4rem;
border: 3px solid #fff;
border-radius: 300px;
box-shadow:0px 10px 10px rgba(0,0,0,0.3);
transition: .3s transform;
&:hover{
    transform:translatey(-5px);
    transition: .3s transform;
}
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
&:hover{
    transform:translatey(-5px);
    transition: .3s transform;
}
`;

export const Subtitle = styled.h3`
text-align:center;
font-weight:300;
font-size:1.2rem;
color: #bbbbbb;
text-shadow:0px 7px 7px rgba(0,0,0,0.3);
transition: .3s transform;
&:hover{
    transform:translatey(-5px);
    transition: .3s transform;
}
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
transition: .3s transform;
box-shadow:0px 10px 10px rgba(0,0,0,0.3);
&:hover{
    transform:translatey(-5px);
    transition: .3s transform;
}
`;
export const ButtonCV = styled.button`
display:flex;
height:40px;
align-items:center;
margin:50px auto;
outline:none;
background:transparent;
border: 1px solid #eeeeee;
border-radius:20px;
padding:.2rem 1rem;
transition: .3s all;
color: #eeeeee;
box-shadow:0px 10px 10px rgba(0,0,0,0.3);
&:hover{
    background-color:#eeeeee;
    color:black;
    transition: .3s all;
}
`;

