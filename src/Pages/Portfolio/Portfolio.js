import React from 'react'
import {menuData} from '../../utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/atom';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio = () => {

    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
    const history = useHistory();
    menuData.map((item,index) => { item.to === history.location.pathname && setMenuSelected(index); return(menuSelected)})
    
    const pageVariants = {
        in:{
            opacity:1,
            x:0,
            scale: [1, 3, 2, 2.3, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
         
        },
        out:{
            opacity:0,
            x:'-100vh'
        }
    }

    const pageTransition = {
        duration:2
    }
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out" variants={pageVariants} transition={pageTransition}>
            Portfolio
        </motion.div>
    )
}

export default Portfolio;