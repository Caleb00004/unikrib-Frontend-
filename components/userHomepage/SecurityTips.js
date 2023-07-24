import {AiFillLock} from 'react-icons/ai'
import style from '../../styles/UserProfile.module.css'

export default function SecurityTips({data}) {
    return (
        <div className={style.security_container}>
            <h3>Security tips <AiFillLock /> </h3>
            <p class="tips">Don't make any payments to agents, vendors and service providers without confirming 
                the apartments, products or services</p>
            <p class="tips">Don't make any payments to the agent without confirmation from the landlord</p>
            <p class="tips">Schedule a date to view the apartment and let atleast one other person know where you're going</p>
            <p class="tips">For your first meeting with the agent make sure you meet in an open place</p>
            <p class="tips">Always make payments AFTER service has been rendered</p>
            <p class="tips">ensure that service provider matches profile image before 
                letting them into your house in case of home service</p>
            <p class="tips">in cases of delivery of products its best to collect product in an open place </p>
        </div>
    )
}