import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle={
    textDecoration: 'none',
    color:'#4a4949'
}
const Header = () => {
  return (
        <header>
            <nav className='header'>
                <div className='logo'>
                    {/* inline css */}
                    <Link to='/' style={linkStyle}>SurveySync</Link>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to='/' style={linkStyle}>Overview</Link>
                        </li>
                        <li>
                            <Link to='/' style={linkStyle}>About us</Link>
                        </li>
                        <li>
                            <Link to='/create-poll' style={linkStyle}>create poll</Link>
                        </li>
                        <li>
                            <Link to='/polls' style={linkStyle}>Public polls</Link>
                        </li>
                    </ul>                    
                </div>
                <div className='profile-section'>
                    <ul>
                        <li>
                            <Link to='/login' style={linkStyle}>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' style={linkStyle}>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    
  )
}

export default Header