import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import SearchComponent from "../components/searchComponent";
import Card from "../components/card/Card";
import style from '../styles/ProductPage.module.css'
import SupportUs from "../components/supportUs/supportus";

export default function ProductPage() {
    return (
        <>
        <Navbar />
        <main className='page_content'>
            <div className={style.page_container}>
                <h2>What do you want to buy</h2>
                <SearchComponent />
                <Card />

                <SupportUs />
            </div>
        </main>
        <Footer />
        </>
    );
  }

