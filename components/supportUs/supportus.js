import style from './supportus.module.css'
import { useRouter } from 'next/router'

export default function SupportUs () {
    const router = useRouter()
    return (
        <div className={style.support}>
            <h3>Like What we do?  <span onClick={() => router.push('/support')}>support us</span></h3>
        </div>
    )
}