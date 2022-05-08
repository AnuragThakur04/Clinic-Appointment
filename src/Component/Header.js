import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
    const navigation = useNavigate()
    const location = useLocation()
    const pathName = location.pathname
    console.log(pathName);
    return (
        <div className="header">
            <header className="header_left"></header>
            <header className="header_center">
                <p onClick={()=>navigation('/')} style={{borderBottom:`${pathName === '/' && `3px solid black`}`, cursor:'pointer'}}>Home</p>
                <p onClick={()=>navigation('/about')} style={{borderBottom:`${pathName === '/about' && `3px solid black`}`, cursor:'pointer'}}>About us</p>
                <p onClick={()=>navigation('/services')} style={{borderBottom:`${pathName === '/services' && `3px solid black`}`, cursor:'pointer'}}>Treatments</p>
                <p onClick={()=>navigation('/about/doctor')} style={{borderBottom:`${pathName === '/about/doctor' && `3px solid black`}`, cursor:'pointer'}}>About Doctor</p>
                <p onClick={()=>navigation('/location')} style={{borderBottom:`${pathName === '/location' && `3px solid black`}`, cursor:'pointer'}}>Location</p>
                <button onClick={()=>navigation('book')}>Book appointment</button>
            </header>
            {/* <header className="header_right"></header> */}
        </div>
    )
}

export default Header