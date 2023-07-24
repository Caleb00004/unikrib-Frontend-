import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import style from '../styles/UserProfile.module.css'
// import SupportUs from "../components/supportUs/supportus"
// import UserCard from "../components/userHomepage/UserCard"
// import Disclaimer from "../components/userHomepage/Disclaimer"
// import SecurityTips from "../components/userHomepage/SecurityTips"
// import { useGetUserProfileQuery } from "../api_feature/apiSlice"
// import { globalState } from "../api_feature/apiSlice"


export default function UserHomepage() {
    return (
        <>
            <Navbar />
            <main className="page_content">
                <div className={style.page_container}>
                    <h2>You need To be Logged In</h2>
                </div>
            </main>
            <Footer />
        </>
    )
    // if (globalState.authorizationToken) {
    //     const {status, error} = useGetUserProfileQuery()
    //     if (status == 'pending') {
    //         return (
    //             <>
    //                 <Navbar />
    //                 <main className="page_content">
    //                     <h2>Loading Page Data</h2>
    //                 </main>
    //                 <Footer />
    //             </>
    //         )        
    //     } else if (status == 'fulfilled') {
    //          return (
    //             <>
    //                 <Navbar />
    //                 <main className="page_content">
    //                     <div className={style.page_container}>
    //                         <div className={style.flex_container}>
    //                             <div className={style.double_container}>
    //                                 <UserCard data={globalState.currentUser}/>
    //                                 <Disclaimer />
    //                             </div>
    //                             <div className={style.single_container}>
    //                                 <SecurityTips />
    //                             </div>
    //                         </div>

    //                         <SupportUs />
    //                     </div>
    //                 </main>
    //                 <Footer />
    //             </>
    //         )           
    //     }
    //     // console.log(data)
    //     // console.log(status)
    //     // console.log(globalState)

    // } else {
    //     return (
    //         <>
    //             <Navbar />
    //             <main className="page_content">
    //                 <div className={style.page_container}>
    //                     <h2>You need To be Logged In</h2>
    //                 </div>
    //             </main>
    //             <Footer />
    //         </>
    //     )
    // }
}

