import style from './navbar.module.css'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { useRouter } from 'next/router'
import { useRef, useState, useContext } from 'react'
import { appContext } from '../context/testContext'
import {BsPersonFill} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'

export default function Navbar() {
    const dropDownRef = useRef(null)
    const [openPhoneNav, setOpenPhoneNav] = useState(false)
    const [openDrop, setOpenDrop] = useState(true)
    const {loggedIn, logout} = useContext(appContext)
    const router = useRouter()
    const pathName = router.pathname

    const togglePhoneNav = () => {
        setOpenPhoneNav(prevState => !prevState)
    }

    const handleDropDown = () => {
        // openDrop ? dropDownRef.current.style.opacity = 1 : dropDownRef.current.style.opacity = 0
        openDrop ? (
            dropDownRef.current.style.opacity = 1 ,
            dropDownRef.current.style.pointerEvents = 'all' )
        : (
            dropDownRef.current.style.opacity = 0,
            dropDownRef.current.style.pointerEvents = 'none' )
        setOpenDrop(prevState => !prevState)
    }
    
    return (
        <nav className={style.navbar}>
            <div className={style.img_container}>
                <Image alt='logo' onClick={() => router.push('/')} src={Logo} height={30} width={160}/>
            {/* <h1 style={{color: 'white', margin: 0, padding: 0}}>The Navbar</h1> */}
            </div>
            <div className={style.nav_contents}>
                <p id={pathName == '/apartments' && 'active-nav'} onClick={() => router.push('/apartments')}>Apartments</p>
                <p id={pathName == '/product' && 'active-nav'} onClick={() => router.push('/product')}>Products</p>
                <p id={pathName == '/services' && 'active-nav'} onClick={() => router.push('/services')}>Services</p>
                {loggedIn ? 
                        <div style={{position: 'relative'}}>
                            <p onClick={handleDropDown} style={{display:'flex', alignItems: 'center', cursor: 'pointer'}}><BsPersonFill color='white' style={{width: 25, height: 25}}/> <AiFillCaretDown style={{width: 10, height: 10}} /></p>
                            <div ref={dropDownRef} className={style.drop_down}>
                                <p onClick={() => router.push('userprofile')}>Profile</p>
                                <p>Edit Proile</p>
                                <p>Help</p>
                                <p onClick={() => logout()}>Logout</p>
                            </div>
                        </div>
                    : 
                        <>
                            <p id={pathName == '/login' && 'active-nav'} onClick={() => router.push('/login')}>Login</p>
                            <p id={pathName == '/signup' && 'active-nav'} onClick={() => router.push('/signup')}>sign up</p> 
                        </>
                    }
            </div>
            
            {/* NAVIGATION FOR PHONE */}
            <RxHamburgerMenu size={28} className={style.hamburger} onClick={togglePhoneNav}/>
            <div className={style.phone_nav} id={openPhoneNav ? 'open' : 'close'}>
                <p id={pathName == '/apartments' && 'active-nav'} onClick={() => router.push('/apartments')}>Apartments</p>
                <p id={pathName == '/product' && 'active-nav'} onClick={() => router.push('/product')}>Products</p>
                <p id={pathName == '/services' && 'active-nav'} onClick={() => router.push('/services')}>Services</p>
                {loggedIn ? 
                        <>
                            <p onClick={() => router.push('userprofile')}>Profile</p>
                            <p>Edit Proile</p>
                            <p>Help</p>
                            <p onClick={() => logout()}>Logout</p>
                        </>
                    : 
                        <>
                            <p id={pathName == '/login' && 'active-nav'} onClick={() => router.push('/login')}>Login</p>
                            <p id={pathName == '/signup' && 'active-nav'} onClick={() => router.push('/signup')}>sign up</p> 
                        </>
                    }
            </div>
        </nav>
    )
}