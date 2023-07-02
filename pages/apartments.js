import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import style from '../styles/ApartmentPage.module.css'
import Card from "../components/card/Card";
import SearchComponent from "../components/searchComponent";
import SupportUs from "../components/supportUs/supportus";

const searhData = {
    type: 'apartment',
    data: [
        {
            title: 'Location',
            options: ['Adolor', 'BDPA', 'Ishior','oluku']
        },
        {
            title: 'Apartment',
            options: ['single Room', 'self-containe', 'one-bedroom','two-bedroom']
        },
        {
            title: 'Min Price',
            options: ['30,000', '60,000', '100,000','160,000']
        },
        {
            title: 'Max Price',
            options: ['50,000', '90,000', '140,000','210,000']
        }
    ]
}

export default function ApartmentsPage() {
    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.page_container}>
                    <h1>Lets find you an apartment</h1>
                    <SearchComponent data={searhData}/>

                    <Card />

                    <SupportUs />
                </div>
            </main>
            <Footer />
        </>
    );
  }