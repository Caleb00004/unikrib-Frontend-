import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import style from '../styles/LoginPage.module.css'
import icon from '../public/iconlogo.png'
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { appContext } from "../context/testContext";
import { useState } from "react";
import { useGetLogInMutation } from "../api_feature/apiSlice";
import Loading from "../components/loadingSpinner";
import { globalState } from "../api_feature/apiSlice";


export default function LoginPage() {
    const {loggedIn, setLoggedIn} = useContext(appContext)    
    const router = useRouter()
    const [loginRequestStatus, setLoginRequestStatus] = useState('idle')
    const [getLogIn] = useGetLogInMutation()

    const [displayLoading, setDisplayLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorDetails, setErrorDetails] = useState({
        display: false,
        message: ''
    })

    const saveAuthorizationTokenWithExpiry = (key, value, expiryInMinutes) => {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + expiryInMinutes * 60 * 1000 // Convert expiry time to milliseconds
        };
        localStorage.setItem(key, JSON.stringify(item));
    };

    function handleLogin(e) {
        e.preventDefault()

        if (loginRequestStatus == 'idle') {
            setDisplayLoading(true)
            try {
                setLoginRequestStatus('pending')
                setErrorDetails(prevState => ({...prevState, display: false}))

                getLogIn({email, password}).unwrap()
                    .then(fulfilled => {
                        console.log('LOGGED IN SUCCESSFUL')
                        console.log(fulfilled)
                        setLoginRequestStatus('idle')
                        setDisplayLoading(false)
                        globalState.authorizationToken = fulfilled.token
                        setLoggedIn(true)
                        saveAuthorizationTokenWithExpiry('token',fulfilled.token,24 * 60)
                        router.push('/')
                    })
                    .catch(rejected => {
                        console.log('AN ERROR OCCURED')
                        console.log(rejected)
                        if (rejected.status == 'FETCH_ERROR') {
                            setErrorDetails({display: true, message: `${rejected.error} Please reload page`})
                        } else {
                            setErrorDetails({display: true, message: `${rejected.data} `})
                        }

                        setDisplayLoading(false)
                        setLoginRequestStatus('idle')
                    })
            } catch (err) {
                console.log('Failed to Post', err)
            }
        }
    }

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.login_page}>
                    <div className={style.page_content}>
                        {displayLoading && <Loading style={{scale: '0.6'}}/>}
                        <Image alt="logo" src={icon} />
                        <h2>Log in to unikrib</h2>
                        <form className={style.form}>
                            <div className={style.form_item}>
                                <label>E-mail</label>
                                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className={style.form_item} >
                                <label>Password</label>
                                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button onClick={(e) => handleLogin(e)}>Log in</button>
                        </form>
                    </div>
                    {errorDetails.display && <p style={{color: 'red', fontStyle: 'italic'}}>{errorDetails.message}</p>}
                    <p>Forgot password?</p>
                    <p>Don't have an account? sign up <span onClick={() => router.push('/signup')} style={{cursor: 'pointer', textDecoration: 'underline', color: 'purple'}}>here</span></p>
                </div>
            </main>
            <Footer />
        </>
    );
};






