import React from 'react'
import logo from '../assets/logo.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const noActiveStyle = 'flex py-2 px-[25px] gap-[12px] font-bold text-[#32323D] text-[13px] items-center'
const activeStyle = 'flex py-2 px-[25px] gap-[12px] font-bold text-[#0F7070] text-[13px] items-center'

const SidebarLeft = () => {
    return (
        <div className='flex flex-col bg-[#DDE4E4]'>
            <div className='flex w-full h-[70px] px-[25px] py-[15px] justify-start items-center'>
                <img src={logo} alt="logo" className='w-[120px] h-[40px]' />
            </div>
            <div className='flex flex-col'>
                {sidebarMenu.map(item => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) => isActive ? activeStyle : noActiveStyle}
                    >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SidebarLeft