import React from 'react';
import * as s from './DropdownButton.style'
import {BiMenuAltLeft} from 'react-icons/bi';

const DropdownButton = ({toggle}) => {
    return (
        <s.DropdownButtonContainer onClick={toggle}>
           <s.Icon><BiMenuAltLeft/></s.Icon>
        </s.DropdownButtonContainer>
    )
}

export default DropdownButton
