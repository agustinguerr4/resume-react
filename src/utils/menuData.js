import { BiHome,BiUserCircle } from 'react-icons/bi'
import {BsFillBriefcaseFill } from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {ImBlog} from 'react-icons/im'


export const menuData = [
    {
        name: 'Home',
        to: '/',
        icon: <BiHome/>
    }, {
        name: 'About',
        to: '/about',
        icon: <BiUserCircle/>
    }, {
        name: 'Resume',
        to: '/resume',
        icon: <FaGraduationCap/>
    }, {
        name: 'Portfolio',
        to: '/portfolio',
        icon: <BsFillBriefcaseFill/>
    }, {
        name: 'Blog',
        to: '/blog',
        icon: <ImBlog/>
    }, {
        name: 'Contact',
        to: '/contact',
        icon: <FiMail/>
    }
]