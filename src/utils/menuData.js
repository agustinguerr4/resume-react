import { BiHome,BiUserCircle } from 'react-icons/bi'
import {BsFillBriefcaseFill } from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

export const menuData = [
    {
        name: 'Home',
        to: '/',
        icon: <BiHome/>
    }, {
        name: 'About',
        to: '/',
        icon: <BiUserCircle/>
    }, {
        name: 'Resume',
        to: '/',
        icon: <FaGraduationCap/>
    }, {
        name: 'Portfolio',
        to: '/',
        icon: <BsFillBriefcaseFill/>
    }, {
        name: 'Contact',
        to: '/',
        icon: <FiMail/>
    }
]