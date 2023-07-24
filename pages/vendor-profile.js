import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import style from '../styles/vendor-profile.module.css'
import { useState } from "react"

export default function VendorProfile() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        userType: ''
    })

    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.page_container}>
                    <h3>Complete your profile</h3>
                    <form className={style.form}>
                        <div className={style.form_item} >
                            <label>Choose product category</label>
                            <select value={formData.userType} onChange={(e) => setFormData(prev => ({...prev, userType: e.target.value}))}>
                                <option value=""></option>
                                <option value="57733c1a-7de9-4d03-90cc-103f46fa69ca">Beds and beddings</option>
                                <option value="3714198f-cf88-4a3e-a421-49330b793f96">Books and stationery</option>
                                <option value="a7e2a6c6-fe1b-403f-ba07-cfb8e79d46ed">Clothing and Accesories</option>
                                <option value="bea94c26-b8b2-4833-851b-15008b049112">Cosmetics and care products</option>
                                <option value="96545b3c-a21b-4a8e-ae34-a794642a789d">Drinks and Beverages</option>
                                <option value="46d5c337-5b21-47cc-8210-bbf6c2dcd475">Electronics and Accessories</option>
                                <option value="1fa0789d-812d-4cac-906b-7d8836fc476c">Food and Groceries</option>
                                <option value="b6eae558-8ac1-469b-814c-633568281e65">Footwear</option>
                                <option value="23ce8c2a-74c5-47c3-a7cd-fb615f2478a7">Home furniture</option>
                                <option value="3e524616-9d99-47b9-9e33-ac64b3232123">Jewellery</option>
                                <option value="920d71d0-4df2-48a5-80f8-3b311e70eaef">Kitchen utensils</option>
                                <option value="5e99bd98-7c3b-4010-9418-1582cf6cc665">Laptops and Accessories</option>
                                <option value="e53e68cb-1177-4d78-80a1-a3f0ee79c220">Phones and Accessories</option>
                                <option value="36842f70-8e06-414f-bbce-228f3d88115b">Stationery</option>
                            </select>
                        </div>
                        <div className={style.form_item} >
                            <label>Who are you</label>
                            <select value={formData.userType} onChange={(e) => setFormData(prev => ({...prev, userType: e.target.value}))}>
                                <option value=""></option>
                                <option value="09a1f9b1-dfbd-4b70-bda0-c63614c98cea">Adolor</option>
                                <option value="8481a1b5-fd53-48b8-83a4-51527f2545f8">BDPA</option>
                                <option value="8627d7ba-9369-48c9-bd93-50c325676a9d">Ebvoumore</option>
                                <option value="5b242a92-7d5e-4535-914f-5876c5e0a598">Ekosodin</option>
                                <option value="18d80df7-6443-4d71-95e5-86bb9276c844">Evidence</option>
                                <option value="4613e465-7388-4ce9-871d-439b199bccc3">Isihor</option>
                                <option value="e1b6beea-11ed-420a-86ce-08f1cb17a29d">Oluku</option>
                                <option value="f3976a9d-f087-4289-83ad-ce1a3844fc63">Osasogie</option>
                                <option value="b97575e5-0ffd-41b2-9e85-0857270a25d1">School hostel</option>
                                <option value="cf649077-7c64-40e3-8b85-1f5c02cef301">Uselu</option>
                            </select>
                        </div>
                        <div className={style.form_item}>
                            <label>Bio</label>
                            <input type="textarea" />
                        </div>
                        <div className={style.form_item}>
                            <label style={{paddingTop: '0.5em', paddingBottom: '0.5em'}}>Upload a profile photo (optional) </label>
                            <input type="file" accept=".jpg, .jpeg, .png" placeholder="Uplaod Fle" style={{border: 'none', backgroundColor: '#1843d1', alignItems: 'center', color: 'white'}}/>
                        </div>

                        <button>Finish</button>
                    </form>
                </div>
            </main>        
            <Footer />
        </>
    )
}


    // <select id="community-select" name="select community">
    //     <option value=""></option>
    //     <option value="09a1f9b1-dfbd-4b70-bda0-c63614c98cea">Adolor</option>
    //     <option value="8481a1b5-fd53-48b8-83a4-51527f2545f8">BDPA</option>
    //     <option value="8627d7ba-9369-48c9-bd93-50c325676a9d">Ebvoumore</option>
    //     <option value="5b242a92-7d5e-4535-914f-5876c5e0a598">Ekosodin</option>
    //     <option value="18d80df7-6443-4d71-95e5-86bb9276c844">Evidence</option>
    //     <option value="4613e465-7388-4ce9-871d-439b199bccc3">Isihor</option>
    //     <option value="e1b6beea-11ed-420a-86ce-08f1cb17a29d">Oluku</option>
    //     <option value="f3976a9d-f087-4289-83ad-ce1a3844fc63">Osasogie</option>
    //     <option value="b97575e5-0ffd-41b2-9e85-0857270a25d1">School hostel</option>
    //     <option value="cf649077-7c64-40e3-8b85-1f5c02cef301">Uselu</option>
    // </select>


    // <select id="product-select" name="select product">
    //     <option value=""></option>
    //     <option value="57733c1a-7de9-4d03-90cc-103f46fa69ca">Beds and beddings</option>
    //     <option value="3714198f-cf88-4a3e-a421-49330b793f96">Books and stationery</option>
    //     <option value="a7e2a6c6-fe1b-403f-ba07-cfb8e79d46ed">Clothing and Accesories</option>
    //     <option value="bea94c26-b8b2-4833-851b-15008b049112">Cosmetics and care products</option>
    //     <option value="96545b3c-a21b-4a8e-ae34-a794642a789d">Drinks and Beverages</option>
    //     <option value="46d5c337-5b21-47cc-8210-bbf6c2dcd475">Electronics and Accessories</option>
    //     <option value="1fa0789d-812d-4cac-906b-7d8836fc476c">Food and Groceries</option>
    //     <option value="b6eae558-8ac1-469b-814c-633568281e65">Footwear</option>
    //     <option value="23ce8c2a-74c5-47c3-a7cd-fb615f2478a7">Home furniture</option>
    //     <option value="3e524616-9d99-47b9-9e33-ac64b3232123">Jewellery</option>
    //     <option value="920d71d0-4df2-48a5-80f8-3b311e70eaef">Kitchen utensils</option>
    //     <option value="5e99bd98-7c3b-4010-9418-1582cf6cc665">Laptops and Accessories</option>
    //     <option value="e53e68cb-1177-4d78-80a1-a3f0ee79c220">Phones and Accessories</option>
    //     <option value="36842f70-8e06-414f-bbce-228f3d88115b">Stationery</option>
    // </select>