import Navbar from "../components/navbar/navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import discussImg from '../public/images/discussing-students.jpg'
import friendImg from '../public/images/Group_of_friends.jpg'
import style from '../styles/AboutPage.module.css'
import dennisImg from '../public/images/Dennis_akinwonjowo.jpg'
import successImg from '../public/images/success_akanbi.jpg'
import SupportUs from "../components/supportUs/supportus";

export default function AboutPage() {

    const router = useRouter()

    return (
        <>
            <Navbar />
            <main className='page_content'>
                <div id="about-ext-cont">
                    <div className={style.about_top_half} id="about-int-cont">
                        <h2 className={style.main_headr} data-aos="zoom-in-down">About unikrib</h2>
                        <div className={style.about_text_cont} id="about-text-cont">
                            <p className={style.about_text} id="about-text" data-aos="zoom-in-up">Unikrib is a student founded and focused platform, 
                                one that seeks to profer solutions to some of the challenges experienced by students
                                while searching for vacant apartments off campus, buying products and accessing domestic services. We
                                aim to ease these difficulties by providing a platform that connects students to
                                agents, vendors and service providers who may or may not be students, and by so doing
                                create a situation where students can find vacant apartments, buy or order products they really need 
                                and access services like AC or generator repairs, carpentry, cleaning or even makeup services
                                from the comfort of their homes using their smartphone as opposed to doing these physically.<br />
                            </p>
                        </div>
                        <div id="about-img-cont" className={style.top_image_container}>
                            <div data-aos="zoom-in-up">
                                <Image src={discussImg} width={2000} height={2000} alt="students discussing"/>
                                {/* <img src="images/discussing-students.jpg" /> */}
                            </div>
                            <div data-aos="zoom-in-up">
                                <Image src={friendImg} width={2000} height={2000} alt="Group of friends"/>
                                {/* <img src="images/Group of friends hanging out.jpg" /> */}
                            </div>
                        </div>

                        <div className={style.vision_cont} id="vision-cont" data-aos="zoom-in-down">
                            <div id="header-cont">
                                <h3 style={{paddingLeft: '1em'}}>Our vision</h3>
                            </div>
                            <div className={style.vision_txt_cont} id="vision-txt-cont">
                                <p>To improve the student experience through location based connectivity
                                </p>                   
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.team_container}>
                    <div class={style.team_member} data-aos="zoom-in-up">
                        <Image src={successImg} alt="success Akanbi"/>
                        <div class="name-title-cont">
                            <p class="name">Success Akanbi</p>
                            <p class="title">Cofounder and team lead</p>
                        </div>
                    </div>
                    <div class={style.team_member} data-aos="zoom-in-up">
                        <Image src={dennisImg} alt="Dennis Akinwojonwo"/>
                        <div class="name-title-cont">
                            <p class="name">Dennis Akinwojonwo</p>
                            <p class="title">Cofounder and tech lead</p>
                        </div>      
                    </div>   
                </div>

                <SupportUs />
            </main>

            {/* <Footer /> */}
        </>
    );
  }
  