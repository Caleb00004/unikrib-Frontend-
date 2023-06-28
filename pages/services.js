import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import SearchComponent from "../components/searchComponent";
import style from '../styles/ServicesPage.module.css'
import SupportUs from "../components/supportUs/supportus";
import Card from "../components/card/Card";
import { useRouter } from "next/router";

export default function ServicesPage() {
    const router = useRouter()

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.page_container}>
                    <h2>Find service providers closet to you</h2>
                    <SearchComponent />

                    <Card />
                    <br /><br />
                    <SupportUs />
                </div>
            </main>
            <Footer />
        </>
    );
  }
  

