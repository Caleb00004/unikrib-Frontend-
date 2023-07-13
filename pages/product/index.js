import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SearchComponent from "../../components/searchcomponent/searchComponent";
import Card from "../../components/card/Card";
import style from '../../styles/ProductPage.module.css'
import SupportUs from "../../components/supportUs/supportus";

const searhData = {
    type: 'product',
    data: [
        {
            title: 'Location',
            options: ['Adolor', 'BDPA', 'Ishior','oluku']
        },
        {
            title: 'Product category',
            options: ['All categories', 'Beds and beddings', 'Books and stationery','clothing and Accessories', 'Cosmetics and care products','Drinks and Beverages', 'Electronics and Accessories', 'Foods and Groceries']
        }
    ],
    input: 'Product name'
}


export default function ProductPage() {
    return (
        <>
        <Navbar />
        <main className='page_content'>
            <div className={style.page_container}>
                <h2>What do you want to buy</h2>
                <SearchComponent data={searhData}/>
                <Card />

                <SupportUs />
            </div>
        </main>
        <Footer />
        </>
    );
  }

