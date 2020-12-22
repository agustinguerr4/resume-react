import React from 'react'
import * as s from './Sidebar.style'
import { menuData } from '../../utils/menuData'

const Sidebar = () => {
    return (
        <s.SidebarContainer>
            <s.MenuItemsContainer>
                {
                    menuData.map((item,index) => (
                        <s.MenuItem key={index}>
                        <s.Icon>
                            {item.icon}
                        </s.Icon>
                            {item.name}
                        </s.MenuItem>
                    ))
                }
            </s.MenuItemsContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
