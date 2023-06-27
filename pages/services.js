import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import SearchComponent from "../components/searchComponent";
import style from '../styles/ServicesPage.module.css'
import HeroImg from '../public/images/product-img.jpg'
import Image from "next/image";

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.page_container}>
                    <h2>Find service providers closet to you</h2>
                    <SearchComponent />

                    <div className={style.img_container}>
                        <Image src={HeroImg} style={{width: '20em', height: '15em'}} />
                        <p>Are you looking to rent an apartment close to your campus without having to spend hours or days househunting? find vacant apartments <span>Here</span></p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
  }
  

