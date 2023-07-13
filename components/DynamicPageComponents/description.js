import style from '../../styles/DynamicPage.module.css'
import {BsFillLightningFill} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function Description() {
    return (
        <div className={style.description_container}>
            <h2>
                Single-room in Opposite
                silver oaks hostel for rent Newton street, Ekosodin
            </h2>
            <p><span className={style.price}>N70000</span> per year</p>
            <div className={style.apartment_features}>
                <h3>Apartment Features</h3>
                <p><BsFillLightningFill /> 12h of power daily</p>
                <p><RiDeleteBin6Line /> waste disposal available</p>
            </div>
        </div>
    )
}


