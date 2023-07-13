import style from '../../styles/DynamicPage.module.css'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SupportUs from '../../components/supportUs/supportus'
import DestailsCard from "../../components/DynamicPageComponents/detailscard";
import ImageSlider from "../../components/DynamicPageComponents/Imageslider";
import Reviews from "../../components/DynamicPageComponents/reviews";
import SecurityTips from "../../components/userProfile/SecurityTips";
import Disclaimer from '../../components/userProfile/Disclaimer'
import Report from "../../components/DynamicPageComponents/report";

export default function Info() {
    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.dynamicPage}>
                    <div className={style.left_section}>
                        <ImageSlider />
                        <Disclaimer />
                    </div>
                    <div className={style.right_section}>
                        <DestailsCard />
                        <Reviews />
                        <SecurityTips />
                        <Report />
                    </div>
                </div>
            </main>
            <SupportUs />
            <Footer />
        </>
    )
}