import HeroImg from '../../public/images/product-img.jpg'
import Image from "next/image";
import style from './card.module.css'

export default function Card () {
    return (
        <div className={style.card_container}>
            <Image alt='product-img' src={HeroImg} style={{width: '20em', height: '15em'}} />
            <p>Are you looking to rent an apartment close to your campus without having to spend hours or days househunting? find vacant apartments <span onClick={() => router.push('/apartments')}>Here</span></p>
        </div>
    )
}