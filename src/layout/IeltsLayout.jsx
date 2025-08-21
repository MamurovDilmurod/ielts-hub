import React from 'react'
import { Navbar } from '../pages/Navbar '
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer '

const IeltsLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default IeltsLayout
