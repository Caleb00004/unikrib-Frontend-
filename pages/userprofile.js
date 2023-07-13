import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import style from '../styles/UserProfile.module.css'
import SupportUs from "../components/supportUs/supportus"
import UserCard from "../components/userProfile/UserCard"
import Disclaimer from "../components/userProfile/Disclaimer"
import SecurityTips from "../components/userProfile/SecurityTips"

export default function UserProfile() {
    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.page_container}>
                    <div className={style.flex_container}>
                        <div className={style.double_container}>
                            <UserCard />
                            <Disclaimer />
                        </div>
                        <div className={style.single_container}>
                            <SecurityTips />
                        </div>
                    </div>

                    <SupportUs />
                </div>
            </main>
            <Footer />
        </>
    )
}