import style from '../../styles/DynamicPage.module.css'
import Link from 'next/link'

export default function Reviews() {
    return (
        <div className={style.review_container}>
            <h2>latest review</h2>
            <div className={style.no_reviews}>
                <p>No reviews have been left for this agent yet.</p>
            </div>
            <Link href="/reviewpage"><p>Add a new review</p></Link>
        </div>
    )
}
