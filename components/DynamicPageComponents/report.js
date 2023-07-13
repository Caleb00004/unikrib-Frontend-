import style from '../../styles/DynamicPage.module.css'
import {BiSolidFlagAlt} from 'react-icons/bi'
import Link from 'next/link'

export default function Report() {


    return (
        <div className={style.report_container}>
            <Link href='/reportpage'><button><BiSolidFlagAlt /> <span>Report</span> </button></Link>
        </div>
    )
}
