import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/itoko.png';
import { TiThMenuOutline } from "react-icons/ti";
const Header = () => {
  return (
    <nav className='bg-black text-white fixed w-full z-[2]'>
        <div className='flex container justify-between items-center' >
            <Link to='/'>
            <img src={logo} alt="logo" className='w-[85px]'/>
        
            </Link>
            <ul className='hidden lg:flex items-center gap-3'>
                <li><Link>Home</Link></li>
                <li><Link>Our Mission</Link></li>
                <li><Link>How it work</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>About Us</Link></li>
            </ul>
            <TiThMenuOutline className='text-white text-2xl lg:hidden' />
        </div>
    </nav>
  )
}

export default Header