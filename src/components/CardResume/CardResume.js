import React from 'react';
import { cardData } from '../../utils/cardData';
import * as s from './CardResume.style';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import {AiOutlineCloudDownload} from 'react-icons/ai'


const CardResume = () => {
    return (
        <s.CardResumeContainer>
            <s.ImageContainer>
                <s.Image src={cardData.foto} alt='m4niga' />
            </s.ImageContainer>
            <s.DataContainer>
                <s.Title>{cardData.title}</s.Title>

                <s.Subtitle>{cardData.subtitle}</s.Subtitle>

            </s.DataContainer>

            <s.LinksContainer>
                <a href='https://github.com/m4niga' target='_blank' rel='noreferrer'>
                    <s.Link src={github}></s.Link>
                </a>
                <a href='https://linkedin.com/in/agustin-guerra' 
                target='_blank' rel='noreferrer'> 
                <s.Link 
                    src={linkedin}>
                </s.Link></a>
            </s.LinksContainer>

           <a href='https://drive.google.com/file/d/1rha5xJsZay6nF_3mfhSimGiovamiRK5Z/view' 
           target='_blank' rel='noreferrer'> 
           <s.ButtonCV>
               Download my CV
                &nbsp;
                <AiOutlineCloudDownload 
                style={{fontSize:'1.5em'}}/>
            </s.ButtonCV></a>

        </s.CardResumeContainer>
    )
}

export default CardResume
