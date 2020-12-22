import React from 'react'
import {menuData} from '../../utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/atom';
import { useHistory } from 'react-router-dom';

const Contact = () => {

    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
    const history = useHistory();
    menuData.map((item,index) => { item.to === history.location.pathname && setMenuSelected(index) })
    
    return (
        <div>
            Contact
        </div>
    )
}

export default Contact;