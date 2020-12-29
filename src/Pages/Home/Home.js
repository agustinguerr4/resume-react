import React from 'react'
import {menuData} from '../../utils/menuData'
import { useRecoilState} from 'recoil';
import { menuSelectedState } from '../../Recoil/Atoms';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as s from './Home.style'

const Home = () => {

    const [menuSelected, setMenuSelected] = useRecoilState(menuSelectedState);
    const history = useHistory();
    menuData.map((item,index) => { item.to === history.location.pathname && setMenuSelected(index); return(menuSelected)})
    
    const pageVariants = {
        in:{
            opacity:1,
            x:0
         
        },
        out:{
            opacity:0
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
            <s.HomeContainer>
               
                Home
            </s.HomeContainer>
            
        </motion.div>
    )
}

export default Home;