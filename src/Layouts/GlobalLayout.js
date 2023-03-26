import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const GlobalLayout = () => {
    return (
        <div className='GlobalLayout'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default GlobalLayout