import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Continental</SidebarLink>
            <SidebarLink to="/">Local</SidebarLink>
            <SidebarLink to="/">InterContinental</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap >
         <SidebarRoute to="/">Order Now</SidebarRoute>    
        </SideBtnWrap>          
        </SidebarContainer>
    )
}

export default Sidebar
