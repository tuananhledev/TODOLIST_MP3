import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

const Header = () => {
    return (
        <div className='flex w-full justify-between items-center'>
            <div className='flex gap-6 items-center w-full'>
                <div className='flex gap-6 text-gray-400'>
                    <span><HiArrowNarrowLeft size={24} /></span>
                    <span><HiArrowNarrowRight size={24} /></span>
                </div>
                <div className='w-1/2'>
                    <Search />
                </div>
            </div>
            <div>
                Login
            </div>
        </div>
    )
}

export default Header