import Styles from './navbar.module.css'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
    const pathName = router.pathname
    console.log(pathName)
    
    return (
        <nav className={Styles.navbar}>
            <div className={Styles.img_container}>
                <Image alt='logo' onClick={() => router.push('/')} src={Logo} height={30} width={160}/>
            {/* <h1 style={{color: 'white', margin: 0, padding: 0}}>The Navbar</h1> */}
            </div>
            <div className={Styles.nav_contents}>
                <p id={pathName == '/apartments' && 'active-nav'} onClick={() => router.push('/apartments')}>Apartments</p>
                <p id={pathName == '/product' && 'active-nav'} onClick={() => router.push('/product')}>Products</p>
                <p id={pathName == '/services' && 'active-nav'} onClick={() => router.push('/services')}>Services</p>
                <p id={pathName == '/login' && 'active-nav'} onClick={() => router.push('/login')}>Login</p>
                <p id={pathName == '/signup' && 'active-nav'} onClick={() => router.push('/signup')}>sign up</p>
            </div>
        </nav>
    )
}