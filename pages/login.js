import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import style from '../styles/LoginPage.module.css'
import Icon from '../public/logo_icon.png'
import Image from "next/image";
import { useRouter } from "next/router";

export default function LoginPage() {
    const router = useRouter()

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.login_page}>
                    <div className={style.page_content}>
                        <Image alt="logo" src={Icon} style={{width: '10em', height: '10em'}}/>
                        <h2>Log in to unikrib</h2>
                        <form className={style.form}>
                            <div className={style.form_item}>
                                <label>E-mail</label>
                                <input type="email" placeholder="Enter Email"/>
                            </div>
                            <div className={style.form_item} >
                                <label>Password</label>
                                <input type="password" placeholder="Enter Password"/>
                            </div>
                            <button>Log in</button>
                        </form>
                    </div>
                    <p>Forgot password?</p>
                    <p>Don &apos t have an account? sign up <span onClick={() => router.push('/signup')} style={{cursor: 'pointer', textDecoration: 'underline', color: 'purple'}}>here</span></p>
                </div>
            </main>
            <Footer />
        </>
    );
};