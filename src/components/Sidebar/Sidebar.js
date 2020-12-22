import React from 'react'
import * as s from './Sidebar.style'
import { menuData } from '../../utils/menuData'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <s.SidebarContainer>
            <s.MenuItemsContainer>
                {
                    menuData.map((item,index) => (
                      <Link to={item.to} key={index}>
                        <s.MenuItem>
                        <s.Icon>
                            {item.icon}
                        </s.Icon>
                            {item.name}
                        </s.MenuItem>
                        </Link>
                    ))
                }
            </s.MenuItemsContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
