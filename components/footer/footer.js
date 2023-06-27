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
                <Image src={Logo} height={30} width={160}/>
                <div class="footer-sub-cont-a">
                    <p class="foot-links" onClick={() => router.push('/apartments')}>Apartments</p>
                    <p class="foot-links" onClick={() => router.push('/product')}>Products</p>
                    <p class="foot-links" onClick={() => router.push('/services')}>Services</p>
                    <p class="foot-links" onClick={() => router.push('/about')}>About us</p>
                    <p class="foot-links" onClick={() => router.push('/signup')}>Become a unikrib agent, vendor or service provider</p>
                </div>
                <div class="footer-sub-cont-b">
                    <p class="foot-links" id="foot-para">For feedback and inquiries contact us on</p>
                    <p class="foot-links" ><BsWhatsapp /> +2347054598108</p>
                    <p class="foot-links" ><BsTelephone /> +2347054598108</p>
                    <p class="foot-links" ><CiMail /> unikrib@gmail.com</p>
                </div>
            </div>
            <hr/>
            <div className={style.bottomHalf}>
                <CiFacebook  style={{width: 50, height: 50}} />
                <CiTwitter  style={{width: 50, height: 50}} />
                <CiInstagram  style={{width: 50, height: 50}} />
                <CiLinkedin style={{width: 50, height: 50}}  />
            </div>
        </footer>
    )
}



