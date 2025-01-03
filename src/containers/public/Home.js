import React, { useEffect } from 'react'
import { Header } from '../../components'
import * as apis from '../../apis'


const Home = () => {

    useEffect(() => {
        const fetchDataHome = async () => {
            const response = await apis.getHome()
            console.log(response);
        }
        fetchDataHome()
    }, [])

    return (
        <div className=''>
            <div className='flex h-[70px] px-[59px] items-center'>
                <Header />
            </div>
        </div>
    )
}

export default Home