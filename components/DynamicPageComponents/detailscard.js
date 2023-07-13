import Image from 'next/image'
import style from '../../styles/DynamicPage.module.css'
import {BsFillPencilFill} from 'react-icons/bs'

export default function DestailsCard() {
    return (
        <div className={style.details_card}>
            <div className={style.image_container}>
                <Image />
                <div className={style.image_texts}>
                    <h3>Akpan Caleb</h3>
                    <p>Ebvoumore</p>
                    <p>akpancalebkck@gmail.com</p>
                    <BsFillPencilFill className={style.image_container_icon}/>
                </div>
            </div>

            <div className={style.user_btnContainer}>
                <button>+2348141247608</button>
                <button>+2348141247608</button>
            </div>
        </div>
    )
}
