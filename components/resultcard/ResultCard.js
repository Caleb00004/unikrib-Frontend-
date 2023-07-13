import Image from 'next/image'
import img from '../../public/images/product-img.jpg'
import style from './style.module.css'
import { useRouter } from 'next/router'

export default function ResultCard({type}) {

    const router = useRouter()
    console.log(type)
    function navigateTo() {
        if (type == 'product') {
            console.log('Here PRODC')
            router.push('/product/slug')
        } else if (type == 'services') {
            console.log('Here SER')
            router.push('/services/slug')
        } else {
            console.log('Here APART')
            router.push('/apartments/slug')
        }
    }


    return (
        <div className={style.card_container}>
            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>
                       <div className={style.card_item} onClick={navigateTo}>
                        <hr/>
                        <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                        </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>

            <div className={style.card_item} onClick={navigateTo}>
                <hr/>
                <div className={style.card_content}>
                    <div className={style.img_container}>
                        <Image src={img}/>
                    </div>
                    <h3>Self-contain in Phimas garden hostel for rent Edo street, Ekosodin.</h3>
                    <p><span>N2000000</span> per year</p>
                </div>
            </div>
        </div>
    )
}