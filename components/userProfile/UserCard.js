import Image from 'next/image'
import style from '../../styles/UserProfile.module.css'
import {BsFillPencilFill} from 'react-icons/bs'

export default function UserCard({data}) {
    return (
        <div className={style.user_card}>
            <div className={style.image_container}>
                <Image style={{height: '8em', borderRadius: '50%',  width: '8em', backgroundColor: 'red'}}/>
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