import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import style from '../styles/ReportPage.module.css'

export default function ReportPage() {
    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.page_container}>
                    <div className={style.form_container}>
                        <h3>What do you want to report this user for</h3>

                        <div className={style.form_item}>
                            <div className={style.flex_form_text}>
                                <input type="radio"/>
                                <h3>Dishonesty</h3>
                            </div>
                            <p>This user is Dishonesty</p>
                        </div>

                        <div className={style.form_item}>
                            <div className={style.flex_form_text}>
                                <input type="radio"/>
                                <h3>Fraud</h3>
                            </div>
                            <p>This tried to defraud me</p>
                        </div>
                        
                        <div className={style.form_item}>
                            <div className={style.flex_form_text}>
                                <input type="radio"/>
                                <h3>Unprofessional conduct</h3>
                            </div>
                            <p>This user is Dishonesty</p>
                        </div>

                        <div className={style.form_item}>
                            <div className={style.flex_form_text}>
                                <input type="radio"/>
                                <h3>Harrasment</h3>
                            </div>
                            <p>This user is Dishonesty</p>
                        </div>

                        <div className={style.form_item}>
                            <div className={style.flex_form_text}>
                                <input type="radio"/>
                                <h3>Dangerous conduct</h3>
                            </div>
                            <p>This user attempted to cause me physical harm</p>
                        </div>

                    </div>
                    <div className={style.input_container}>
                        <p>Tell us more</p>
                        <input type="textarea"/>
                        <button>Submit Report</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}