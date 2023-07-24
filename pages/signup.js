import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import style from '../styles/SignupPage.module.css'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useRouter } from "next/router";
import { useState } from "react";
import {BiArrowBack} from 'react-icons/bi'

export default function SignupPage() {
    const [path, setPath] = useState('') // image path
    const [displayProfileSection, setDisplayProfileSection] = useState(false)
    const [hidePassword, setHidePassword] = useState(true)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        password: '',
        confirmPassword: '',
        user_type: 'user',
        com_res: '',
        avatar: path,
        note: '', // bio
        product_category: '',
        service_provide: ''
    })

    const router = useRouter()
    
    function toggleHidePassword() {
        setHidePassword(prev => !prev)
    }   

    function previewImage(e) {
        const selectedFile = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);

        console.log(selectedFile)

        reader.onload = () => {
            setPath(reader.result)
        };

        const save = URL.createObjectURL(selectedFile)
        setFormData(prev => ({...prev, avatar: save}))
    }

    function handleNext(e) {
        e.preventDefault()
        setDisplayProfileSection(prev => !prev)
    }

    const getStarted = 
        <>
            <div className={style.form_item}>
                <label>First Name</label>
                <input value={formData.first_name} onChange={(e) => setFormData(prev => ({...prev, first_name: e.target.value}))} type="text" />
            </div>
            <div className={style.form_item}>
                <label>Last Name</label>
                <input value={formData.last_name} onChange={(e) => setFormData(prev => ({...prev, last_name: e.target.value}))} type="text"/>
            </div>
            <div className={style.form_item} >
                <label>E-mail</label>
                <input value={formData.email} onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} type="email" placeholder="Email Address"/>
            </div>
            <div className={style.form_item} >
                <label>Phone Number</label>
                <input value={formData.phone_no} onChange={(e) => setFormData(prev => ({...prev, phone_no: e.target.value}))} type="number" placeholder="Enter Phone Number"/>
            </div>
            <div className={style.form_item} >
                <label>Password</label>
                <input value={formData.password} onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))} type={hidePassword ? "password" : "text"} placeholder="Enter Password"/>
                <div className={style.hide_icon} onClick={toggleHidePassword}>
                    {hidePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
            </div>
            <div className={style.form_item} >
                <label>Confirm Password</label>
                <input value={formData.confirmPassword} onChange={(e) => setFormData(prev => ({...prev,confirmPassword: e.target.value}))} type={hidePassword ? "password" : "text"} placeholder="Confirm Password"/>
                <div className={style.hide_icon} onClick={toggleHidePassword}>
                    {hidePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
            </div>
            <div className={style.form_item} >
                <label>Who are you</label>
                <select value={formData.user_type} onChange={(e) => setFormData(prev => ({...prev, user_type: e.target.value}))}>
                    <option value={'user'}>Regular User</option>
                    <option value={'agent'}>Agent</option>
                    <option value={'sp'}>Service Provider</option>
                    <option value={'vendor'}>Vendor</option>
                </select>
            </div>

            <button onClick={handleNext}>Create Account</button>
        </>

        function profileSection() {
            if (formData.user_type == 'user') {
                return (
                    <>
                        <div className={style.form_item} >
                            <label>Where do you live</label>
                            <select value={formData.com_res} onChange={(e) => setFormData(prev => ({...prev, userType: e.target.value}))}>
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
                            <label style={{paddingTop: '0.5em', paddingBottom: '0.5em'}}>Upload a profile photo (optional) </label>
                            <input type="file" accept=".jpg, .jpeg, .png" placeholder="Uplaod Fle" onChange={(e) => previewImage(e)} style={{border: 'none', backgroundColor: '#1843d1', alignItems: 'center', color: 'white'}}/>
                        </div>

                        <Image id="preview-image" className={style.previewImage} src={formData.avatar} alt="preview Image" width={0} height={0}/>
                        <button>Finish</button>
                    </>
                )
            } else if (formData.user_type == 'vendor') {
                return (
                    <>
                        <div className={style.form_item} >
                            <label>Choose product category</label>
                            <select value={formData.product_category} onChange={(e) => setFormData(prev => ({...prev, userType: e.target.value}))}>
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
                            <input type="file" accept=".jpg, .jpeg, .png" placeholder="Uplaod Fle" onChange={(e) => previewImage(e)} style={{border: 'none', backgroundColor: '#1843d1', alignItems: 'center', color: 'white'}}/>
                        </div>

                        <Image id="preview-image" className={style.previewImage} src={formData.avatar} alt="preview Image" width={0} height={0}/>
                        <button>Finish</button>
                    </>                                    
                )
            } else if (formData.user_type == 'sp') {
                return (
                    <>
                        <div className={style.form_item} >
                            <label>What service do you provide</label>
                            <select value={formData.service_provide} onChange={(e) => setFormData(prev => ({...prev, userType: e.target.value}))}>
                                <option value=""></option>
                                <option value="9c940693-1ce2-4a7a-a947-f1a88088a033">AC installer</option>
                                <option value="72ee7677-2c64-4c38-8f95-19dca9dd4215">Carpenter</option>
                                <option value="4625c72b-68bf-4d9e-939a-c2e2f73409b2">Caterer</option>
                                <option value="c6452c26-0253-499e-bd0c-29bf08e3e6b1">DSTV installer</option>
                                <option value="dd4ccf9a-9bc6-4453-896f-78629e2c944d">Electrician</option>
                                <option value="7b8ae50d-60c7-4052-8aab-cbd4827fbe06">Fashion Designer</option>
                                <option value="d6057c9d-b4ef-497e-806f-84868458eefe">Generator Repairer</option>
                                <option value="b55338a2-2ee1-4dda-8125-c1d18dd0f76b">Hair Stylist</option>
                                <option value="d38b860f-a6a7-44f2-a522-82398097b1ef">Logistics</option>
                                <option value="67d7b1c5-5fd1-46cc-98cd-1e5348ac1f0a">Make up artist</option>
                                <option value="f81c4cd7-6228-40e6-befe-1cdceb5e60e2">Painter</option>
                                <option value="8204dc62-ae15-460c-bbbb-5cd10a52536c">Plumber</option>
                                <option value="09152d3e-4b91-4c8b-afc3-a3307321d9d1">Refrigerator repairer</option>
                                <option value="af7db52c-06c2-4667-901c-6e417e7b4f77">Welder</option>
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
                            <input type="file" accept=".jpg, .jpeg, .png" placeholder="Uplaod Fle" onChange={(e) => previewImage(e)} style={{border: 'none', backgroundColor: '#1843d1', alignItems: 'center', color: 'white'}}/>
                        </div>

                        <Image id="preview-image" className={style.previewImage} src={formData.avatar} alt="preview Image" width={0} height={0}/>
                        <button>Finish</button>
                    </>                                    
                )
            }
        }
        // const = formData.user
        console.log(formData)

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div className={style.page_content}>
                    {displayProfileSection && <BiArrowBack onClick={handleNext} color="white" size={25} style={{cursor: 'pointer', position: 'absolute', right: '1em', backgroundColor: 'black', borderRadius: '50%', padding: '0.2em'}}/>}
                    {!displayProfileSection ? <h2>Get started for free</h2> : <h2>Complete your profile</h2>}
                    <form className={style.form}>
                        {!displayProfileSection ? getStarted : profileSection()}
                    </form>
                    
                    {
                        !displayProfileSection && 
                        <>
                            <button><FcGoogle size={20}/><span>sign up with google</span></button>
                            <p>Already have an account? sign in <span onClick={() => router.push('/login')}>here</span></p>
                            <p>Are you an Agent or service provider sign up <span >here</span></p>   
                        </>
                    }
                </div>
            </main>
            <Footer />
        </>
    );
  }

    // <select id="service-select" name="select service">
    //     <option value=""></option>
    //      <option value="9c940693-1ce2-4a7a-a947-f1a88088a033">AC installer</option>
    //      <option value="72ee7677-2c64-4c38-8f95-19dca9dd4215">Carpenter</option>
    //      <option value="4625c72b-68bf-4d9e-939a-c2e2f73409b2">Caterer</option>
    //      <option value="c6452c26-0253-499e-bd0c-29bf08e3e6b1">DSTV installer</option>
    //      <option value="dd4ccf9a-9bc6-4453-896f-78629e2c944d">Electrician</option>
    //      <option value="7b8ae50d-60c7-4052-8aab-cbd4827fbe06">Fashion Designer</option>
    //      <option value="d6057c9d-b4ef-497e-806f-84868458eefe">Generator Repairer</option>
    //      <option value="b55338a2-2ee1-4dda-8125-c1d18dd0f76b">Hair Stylist</option>
    //      <option value="d38b860f-a6a7-44f2-a522-82398097b1ef">Logistics</option>
    //      <option value="67d7b1c5-5fd1-46cc-98cd-1e5348ac1f0a">Make up artist</option>
    //      <option value="f81c4cd7-6228-40e6-befe-1cdceb5e60e2">Painter</option>
    //      <option value="8204dc62-ae15-460c-bbbb-5cd10a52536c">Plumber</option>
    //      <option value="09152d3e-4b91-4c8b-afc3-a3307321d9d1">Refrigerator repairer</option>
    //      <option value="af7db52c-06c2-4667-901c-6e417e7b4f77">Welder</option>
    // </select>
  
