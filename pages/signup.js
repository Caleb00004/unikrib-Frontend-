import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import style from '../styles/SignupPage.module.css'
import {FcGoogle} from 'react-icons/fc'
import { useRouter } from "next/router";

export default function SignupPage() {
    
    const router = useRouter()

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.page_content}>
                    <h2>Get started for free</h2>                    
                    <form className={style.form}>
                        <div className={style.form_item}>
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className={style.form_item}>
                            <label>Last Name</label>
                            <input type="text"/>
                        </div>
                        <div className={style.form_item} >
                            <label>E-mail</label>
                            <input type="email" placeholder="Email Address"/>
                        </div>
                        <div className={style.form_item} >
                            <label>Phone Number</label>
                            <input type="number" placeholder="Enter Phone Number"/>
                        </div>
                        <div className={style.form_item} >
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                        <button>Create Account</button>
                    </form>
                    <button><FcGoogle size={20}/><span>sign up with google</span></button>
                    <p>Already have an account? sign in <span onClick={() => router.push('/login')}>here</span></p>
                    <p>Are you an Agent or service provider sign up <span >here</span></p>
                </div>
            </main>
            <Footer />
        </>
    );
  }
  
