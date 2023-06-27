import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import style from '../styles/SupportPage.module.css'

export default function SupportPage() {
    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.support_page}>
                    <h2>Support us</h2>
                    <p>Support us to enable us improve our services and provide more value to you</p>
                    <form className={style.form_component}>
                        <div className={style.form_item}>
                            {/* <label>Email Address</label> */}
                            <input placeholder="Email" type="email"/>
                        </div>
                        <div className={style.form_item}>
                            {/* <label>Amount</label> */}
                            <input placeholder="Amount" type="number" />
                        </div>
                        <div className={style.form_item}>
                            {/* <label>Name</label> */}
                            <input placeholder="Name" type="text" />
                        </div>
                        <button onClick={(e) => e.preventDefault()}>Support</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}