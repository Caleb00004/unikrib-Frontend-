import Logo from '../../public/logo.png'
import Image from 'next/image'
import style from './footer.module.css'
import { useRouter } from 'next/router'
import {CiFacebook, CiTwitter, CiInstagram, CiLinkedin, CiMail} from 'react-icons/ci'
import {BsTelephone, BsWhatsapp} from 'react-icons/bs'

export default function Footer() {
    const router = useRouter()

    return (
        <footer className={style.footer}>
            <div className={style.topHalf}>
                <Image alt='logo' src={Logo} height={30} width={160}/>
                <div className="footer-sub-cont-a">
                    <p className="foot-links" onClick={() => router.push('/apartments')}>Apartments</p>
                    <p className="foot-links" onClick={() => router.push('/product')}>Products</p>
                    <p className="foot-links" onClick={() => router.push('/services')}>Services</p>
                    <p className="foot-links" onClick={() => router.push('/about')}>About us</p>
                    <p className="foot-links" onClick={() => router.push('/signup')}>Become a unikrib agent, vendor or service provider</p>
                </div>
                <div className="footer-sub-cont-b">
                    <p className="foot-links" id="foot-para">For feedback and inquiries contact us on</p>
                    <p className="foot-links" ><BsWhatsapp /> +2347054598108</p>
                    <p className="foot-links" ><BsTelephone /> +2347054598108</p>
                    <p className="foot-links" ><CiMail /> unikrib@gmail.com</p>
                </div>
            </div>
            <hr/>
            <div className={style.bottomHalf}>
                <CiFacebook  />
                <CiTwitter  />
                <CiInstagram  />
                <CiLinkedin  />
            </div>
        </footer>
    )
}



