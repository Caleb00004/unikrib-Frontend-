import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SearchComponent from "../../components/searchcomponent/searchComponent";
import style from '../../styles/ServicesPage.module.css'
import SupportUs from "../../components/supportUs/supportus";
import Card from "../../components/card/Card";
import { useRouter } from "next/router";


const searhData = {
    type: 'services',
    data: [
        {
            title: 'Select Community',
            options: ['Adolor', 'BDPA', 'Ebvoumore', 'Ekosodin', 'Ishior','oluku' ]
        },
        {
            title: 'Select service provider',
            options: ['All categories', 'Beds and beddings', 'Books and stationery','clothing and Accessories', 'Cosmetics and care products','Drinks and Beverages', 'Electronics and Accessories', 'Foods and Groceries']
        }
    ]
}

export default function ServicesPage() {
    const router = useRouter()

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.page_container}>
                    <h2>Find service providers closet to you</h2>
                    <SearchComponent data={searhData}/>

                    <Card />
                    <br /><br />
                    <SupportUs />
                </div>
            </main>
            <Footer />
        </>
    );
  }
  

