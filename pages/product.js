import Navbar from "../components/navbar";
import Footer from "../components/footer/footer";
import SearchComponent from "../components/searchComponent";

export default function ProductPage() {
    return (
        <>
        <Navbar />
        <main className='page_content'>
            <h2>What do you want to buy</h2>
            <SearchComponent />
        </main>
        <Footer />
        </>
    );
  }

