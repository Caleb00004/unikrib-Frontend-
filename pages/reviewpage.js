import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import style from '../styles/ReviewPage.module.css'

export default function ReviewPage() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.page_container}>
                    <div className={style.reviews_list}>
                        <h2>TIna Rieviws</h2> {/* Vendor's name */}
                    </div>
                    <div className={style.add_review_container}>
                        <h4>Leave a review for TINA</h4>

                        <form onSubmit={handleSubmit}>
                            <div className={style.form_item}>
                                <label>Rate your experience</label>
                                <select>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Average</option>
                                    <option>Poor</option>
                                    <option>Unsuccessful</option>
                                </select>
                            </div>
                            <div className={style.form_item}>
                                <label>Describe your experience</label>
                                <input type="textarea"/>
                            </div>
                            <button>Submit review</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}