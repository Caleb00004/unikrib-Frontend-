import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import HeroImg from '../public/images/product-img.jpg'
import { useRouter } from 'next/router'
import {AiFillHome} from 'react-icons/ai'
import {IoIosSettings} from 'react-icons/io'
import {BsFillCartFill} from 'react-icons/bs'
import {PiPersonFill, PiHandbagFill} from 'react-icons/pi'
import {TiSpanner} from 'react-icons/ti'
import Footer from '../components/footer/footer'
import {Fade} from 'react-awesome-reveal'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page_content'>
        <div className={styles.img_container}>
          <Image alt='product-img' src={HeroImg} width={1000} height={1000} style={{width: '100%', height: '88vh'}}/>
          <div className={styles.img_text}>
            <h1>Unikrib</h1>
            <h3>Househunt online</h3>
            <button>get Started</button>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section className={styles.about_section}>
            <Fade triggerOnce={true} direction='left' distance={"10%"} duration={1500}>
              <div id = "about-sub-cont-a" data-aos="fade-right">
                <div id="about-text-contain" className={styles.about_text}>
                    <h1 className="text-header"> About us</h1>
                    <p className={styles.text_description}>Unikrib is a student founded and focused platform, one that
                      seeks to profer solutions to some of the challenges experienced
                      by students while searching for apartments off campus, buying
                      products and accessing services...
                    </p>
                    <button onClick={() => router.push('/about')} >Readmore</button>
                    {/* <p><a href="{{ url_for('static', filename='about-page.html') }}" className="redmre">Readmore</a></p>   */}
                  </div>
              </div>
              <div id="about-sub-cont-b" data-aos="zoom-in-up" className={styles.about_section_imgContainer}>
                <Image alt='product-img' src={HeroImg} width={500} height={500} />
              </div>
            </Fade>
          </section>

        {/* SERVICES SECTION */}
        <section className={styles.service_section}>
        <h2 id="service-header">Our services</h2>
          <div id="service-cont" className={styles.service_grid_container}>
            <Fade triggerOnce={true} direction='up' distance={"10%"} duration={1500}>
              <div onClick={() => router.push('/services')} className={styles.service_grid_item}>
                  <div className="service-sub-cont" data-aos="zoom-in-up">
                    <AiFillHome className={styles.service_grid_icon} style={{width: 80, height: 80}}/>
                    <p className={styles.text_description}>Through this platform we enable students search for vacant
                      student apartments close to their campuses online and connect
                      them to various agents
                    </p>
                  </div>
              </div>
              <div onClick={() => router.push('/services')} className={styles.service_grid_item}>
                  <div className="service-sub-cont" data-aos="zoom-in-up">
                    {/* <i className="fa fa-cog" id="large2"></i> */}
                    <IoIosSettings className={styles.service_grid_icon} style={{width: 80, height: 80}} />
                    <p className={styles.text_description}>Unikrib connects students to service providers, like 
                      carpenters,electricians, plumbers, cleaners etc. and 
                      allows them order these services with ease
                    </p>
                  </div>
              </div>
              <div onClick={() => router.push('/services')} className={styles.service_grid_item}>
                <div className="service-sub-cont " data-aos="zoom-in-up">
                  <BsFillCartFill className={styles.service_grid_icon} style={{width: 80, height: 80}} />
                  {/* <i className="fa fa-shopping-cart" id="large3"></i> */}
                  <p className={styles.text_description}>We connect students to various vendors in and around 
                    their campuses and provide them more buying options 
                    and competitive pricing
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* REGISTER SECTION */}
        <section className={styles.about_section}>
          <Fade triggerOnce={true} direction='right' distance={"10%"} duration={1500}>
            <div id = "about-sub-cont-a" data-aos="fade-right">
              <div id="about-text-contain" className={styles.about_text}>
                  <h1 className="text-header"> Become a unikrib vendor or agent</h1>
                  <p className={styles.text_description}>Are you an agent, a service provider or a vendor? 
                    are students your main customer base? are you looking for
                    a platform to advertise your apartments,goods and services
                    to a wide audience of prospective customers? register
                    with us to advertise your services to as many as 5000 students
                    for less than N1000 a month!
                  </p>
                  <button>register now</button>
                  {/* <p><a href="{{ url_for('static', filename='about-page.html') }}" className="redmre">Readmore</a></p>   */}
                </div>
            </div>
            <div id="about-sub-cont-b" data-aos="zoom-in-up" className={styles.about_section_imgContainer}>
              <Image alt='product-img' src={HeroImg} width={500} height={500} />
            </div>
          </Fade>
        </section>

        {/* STATS SECTION */}
        <section className={styles.stats_section} id="stat-cont">
            <div id="stat-sub-cont">
                <AiFillHome />
                <p className="values" id="stat1">0</p>
                <p className="groups">Apartments</p>
            </div>
            <div id="stat-sub-cont">
                <PiPersonFill />
                <p className="values" id="stat2">0</p>
                <p className="groups">Agents</p> 
            </div>
            <div id="stat-sub-cont">
                <PiHandbagFill />
                <p className="values" id="stat3">0</p>
                <p className="groups">Vendors</p>
            </div>
            <div id="stat-sub-cont">
                <TiSpanner />
                <p className="values" id="stat4">0</p>
                <p className="groups">Service providers</p> 
            </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
