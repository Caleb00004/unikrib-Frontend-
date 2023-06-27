import style from './searchComponent.module.css'


export default function SearchComponent({data}) {
    return (
        <div className={style.component}>
            <div className={style.container}>
                <div className={style.container_item}>
                    <div className={style.texts}>
                        <div className={style.topHalf}>
                            <p>select Community</p>
                            <p>Select service provider</p>
                        </div>
                        <hr style={{border: '2px solid blue'}}/>
                        <div className={style.bottomHalf}>
                            <select>
                                <option>All communities</option>
                                <option>park</option>
                                <option>minute</option>
                                <option>All communities</option>
                            </select>
                            <select>
                                <option>All communities</option>
                                <option>All communities</option>
                                <option>All communities</option>
                                <option>All communities</option>
                            </select>
                        </div>
                    </div>
                    <button>Search</button>
                </div>            
            </div>

            <div className={style.showing_results} >
                <h3>showing results 1 - 2 out of 2</h3>
            </div>
        </div>
    )
}