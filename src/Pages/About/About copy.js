import React from 'react'
import {menuData} from '../../utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/atom';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
const About = () => {

    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
    const history = useHistory();
    menuData.map((item,index) => { item.to === history.location.pathname && setMenuSelected(index); return(menuSelected)})
    
    
    const pageTransition = {
        in:{
            opacity:1,
            y:0
        },
        out:{
            opacity:0,
            y:'-100%'
        }
    }

    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out" variants={pageTransition}>
            About
        </motion.div>
    )
}


export default About;