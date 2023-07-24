import Image from 'next/image'
import style from '../../styles/UserProfile.module.css'
import {BsFillPencilFill} from 'react-icons/bs'

export default function UserCard({data}) {
    const {first_name, last_name, phone_no, avatar , email, user_type} = data
    console.log(data)
    return (
        <div className={style.user_card}>
            <div className={style.image_container}>
                <Image src={avatar} width={100} height={100} style={{height: '8em', borderRadius: '50%',  width: '8em'}}/>
                <div className={style.image_texts}>
                    <h3>{first_name} {last_name}</h3>
                    <p>Agege estate</p>
                    <p>{email}</p>
                    <BsFillPencilFill className={style.image_container_icon}/>
                </div>
            </div>

            <div className={style.user_btnContainer}>
                <button>{phone_no}</button>
                <button>{phone_no}</button>
            </div>
        </div>
    )
}