import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.png'
import { useRouter } from 'next/router'
import { useRef, useState, useContext } from 'react'
import { appContext } from '../../context/testContext'
import {BsPersonFill} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import { globalState } from '../../api_feature/apiSlice'
import { useGetLogOutMutation } from '../../api_feature/apiSlice'

export default function Navbar() {
    let {authorizationToken} = globalState
    const dropDownRef = useRef(null)
    const [openPhoneNav, setOpenPhoneNav] = useState(false)
    const [openDrop, setOpenDrop] = useState(true)
    const [logout] = useGetLogOutMutation()
    const {loggedIn, setLoggedIn} = useContext(appContext)
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

    const handleLogout = () => {
        console.log('handle logot')
        if (loggedIn) {
            logout()
                .then(fulfilled => {
                    console.log('logged out')
                    globalState.authorizationToken = ''
                    localStorage.removeItem('token')
                    setLoggedIn(false)
                    // toast.success('logged Out')
                    return router.push('/')
                })
                .catch(rejected => (
                    console.log('An Error'),
                    // toast.error('An error occured'),
                    console.log(rejected)
                ))   
        }
    }
    
    return (
        <nav className={style.navbar}>
            <div className={style.img_container}>
                <Image alt='logo' onClick={() => router.push('/')} src={Logo} height={30} width={160}/>
            {/* <h1 style={{color: 'white', margin: 0, padding: 0}}>The Navbar</h1> */}
            </div>
            <div className={style.nav_contents}>
                <Link href='/apartments'> <p id={pathName == '/apartments' && 'active-nav'} >Apartments</p> </Link>
                <Link href='/product'> <p id={pathName == '/product' && 'active-nav'} >Products</p> </Link>
                <Link href='/services'> <p id={pathName == '/services' && 'active-nav'} >Services</p> </Link>
                {loggedIn ? 
                        <div style={{position: 'relative'}}>
                            <p onClick={handleDropDown} style={{display:'flex', alignItems: 'center', cursor: 'pointer'}}><BsPersonFill color='white' style={{width: 25, height: 25}}/> <AiFillCaretDown style={{width: 10, height: 10}} /></p>
                            <div ref={dropDownRef} className={style.drop_down}>
                                <Link href='/userprofile' ><p>Profile</p></Link>
                                <Link href='#'> <p>Edit Proile</p> </Link>
                                <Link href='#'> <p>Help</p> </Link>
                                <p onClick={() => handleLogout()}>Logout</p>
                            </div>
                        </div>
                    : 
                        <>
                            <Link href='/login'> <p id={pathName == '/login' && 'active-nav'} >Login</p> </Link>
                            <Link href='/signup'> <p id={pathName == '/signup' && 'active-nav'} >sign up</p> </Link>
                        </>
                    }
            </div>
            
            {/* NAVIGATION FOR PHONE */}
            <RxHamburgerMenu size={28} className={style.hamburger} onClick={togglePhoneNav}/>
            <div className={style.phone_nav} id={openPhoneNav ? 'open' : 'close'}>
                <Link href='/apartments'> <p id={pathName == '/apartments' && 'active-nav'} >Apartments</p> </Link>
                <Link href='/product'> <p id={pathName == '/product' && 'active-nav'} >Products</p> </Link>
                <Link href='/services'> <p id={pathName == '/services' && 'active-nav'} >Services</p> </Link>
                {loggedIn ? 
                        <>
                            <Link href='/userprofile' ><p>Profile</p></Link>
                            <Link href='#'> <p>Edit Proile</p> </Link>
                            <Link href='#'> <p>Help</p> </Link>
                            <p onClick={() => handleLogout()}>Logout</p>
                        </>
                    : 
                        <>
                            <Link href='/login'> <p id={pathName == '/login' && 'active-nav'} >Login</p> </Link>
                            <Link href='/signup'> <p id={pathName == '/signup' && 'active-nav'} >sign up</p> </Link>
                        </>
                    }
            </div>
        </nav>
    )
}