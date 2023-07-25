import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import style from '../styles/agentProfilePage.module.css'
import UserCard from "../components/userHomepage/UserCard"
import Disclaimer from "../components/userHomepage/Disclaimer"
import SecurityTips from "../components/userHomepage/SecurityTips"
import SupportUs from "../components/supportUs/supportus"
import { globalState } from "../api_feature/apiSlice"

export default function AgentProfile() {
    const {currentUser} = globalState
    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.page_content}>
                    <div className={style.flex_container}>
                        <div className={style.double_container}>
                            <UserCard data={currentUser}/>
                            <div className={style.reviews_container}>
                                <h3>Latest Reviews</h3>
                                <div>
                                    <p>You have to revuews</p>
                                </div>
                            </div>
                            <div className={style.add_apartment_container}>
                                <p>Upload New Apartments</p>
                            </div>
                        </div>
                        <div className={style.single_container}>
                            <h3>Your uploads</h3>

                        </div>
                    </div>

                    <SupportUs />
                </div>
            </main>
            <Footer />
        </>
    )
}