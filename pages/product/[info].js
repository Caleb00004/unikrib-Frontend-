import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function Info() {
    return (
        <>
            <Navbar />
            <main className="page_content">
                <div>
                    <h1>This is a dynamic product page</h1>
                </div>
            </main>
            <Footer />
        </>
    )
}