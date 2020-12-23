import React from 'react'
import { menuData } from '../../utils/menuData'
import { Link } from 'react-router-dom'
import * as s from './Dropdown.style'
import { cardData } from '../../utils/cardData'
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <s.DropdownContainer isOpen={isOpen} onClick={toggle}>
            <s.Icon onClick={toggle}>
                <s.CloseIcon />
            </s.Icon>

            <s.DropdownWrapper>
                <s.ImageContainer>
                    <s.Image src={cardData.foto} alt='m4niga' />
                </s.ImageContainer>
                <s.DataContainer>
                    <s.Title>{cardData.title}</s.Title>

                    <s.Subtitle>{cardData.subtitle}</s.Subtitle>

                </s.DataContainer>
                <s.DropdownMenu>
                    {
                        menuData.map((item, index) => (
                            
                            <Link
                                to={item.to}
                                key={index}>
                                <s.DropdownLink
                                    onClick={toggle}
                                    to={item.to}
                                    key={index}
                                >
                                    {item.name}
                                </s.DropdownLink>
                            </Link>
                        ))
                    }

                </s.DropdownMenu>
                <s.LinksContainer>
                    <a href='https://github.com/m4niga' target='_blank' rel='noreferrer'>
                        <s.Link src={github}></s.Link>
                    </a>
                    <a href='https://drive.google.com/file/d/1rha5xJsZay6nF_3mfhSimGiovamiRK5Z/view'
                        target='_blank' rel='noreferrer'>
                        <s.ButtonCV>
                            Download my CV
                            &nbsp;
                <AiOutlineCloudDownload
                                style={{ fontSize: '1.5em' }} />
                        </s.ButtonCV></a>
                    <a href='https://linkedin.com/in/agustin-guerra'
                        target='_blank' rel='noreferrer'>
                        <s.Link
                            src={linkedin}>
                        </s.Link></a>
                </s.LinksContainer>



            </s.DropdownWrapper>
        </s.DropdownContainer>
    )
}

export default Dropdown
