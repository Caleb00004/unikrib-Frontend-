import {AiOutlineWarning} from 'react-icons/ai'
import style from '../../styles/UserProfile.module.css'

export default function Disclaimer({data}) {
    return (
        <div className={style.disclaimer_container}>
            <h3>Disclaimer <AiOutlineWarning /> </h3>
            <p>Please note that we do not endorse or guarantee the products provided by vendors listed on our website.
                It is the responsibility of the student to confirm products before making payments. we will not be held
                liable for issues that may arise from payments made before due diligence is done.</p>
        </div>
    )
}