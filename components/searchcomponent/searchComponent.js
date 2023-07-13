import style from './searchComponent.module.css'
import ResultCard from '../resultcard/ResultCard'


export default function SearchComponent({data}) {
    console.log(data)

    if ( data.type != 'product') {
        return (
            <div className={style.component}>
                <div className={style.container}>
                    <div className={style.container_item}>
                        <div className={style.texts}>
                            <div className={style.topHalf}>
                                {data.data.map((item, i) => <p key={i}>{item.title}</p>)}

                                {/* <p>select Community</p>
                                <p>Select service provider</p> */}

                            </div>
                            <hr style={{border: '2px solid blue'}}/>
                            <div className={style.bottomHalf}>
                                {data.data.map((item, i) => {
                                    return (
                                        <select key={i}>
                                            {item.options.map((option, i) => (
                                                <option key={i}>{option}</option>
                                            ))}
                                        </select>
                                    )
                                })}

                            </div>
                        </div>
                        <button>Search</button>
                    </div>            
                </div>
    
                <div className={style.showing_results} >
                    <h3>showing results 1 - 2 out of 2</h3>
                </div>

                <ResultCard type={data.type}/>
            </div>
        )
    } else {
        return (
            <div className={style.component}>
                <div className={style.container}>
                    <div className={style.container_item}>
                        <div className={style.texts}>
                            <div className={style.topHalf}>
                                {data.data.map((item, i) => <p key={i}>{item.title}</p>)}
                                <p>{data.input}</p>
                            </div>
                            <hr style={{border: '2px solid blue'}}/>
                            <div className={style.bottomHalf}>
                                {data.data.map((item, i) => {
                                    return (
                                        <select key={i}>
                                            {item.options.map((option, i) => (
                                                <option key={i}>{option}</option>
                                            ))}
                                        </select>
                                    )
                                })}
                                <input type='text' placeholder='Enter product name'/>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>            
                </div>
    
                <div className={style.showing_results} >
                    <h3>showing results 1 - 2 out of 2</h3>
                </div>

                <ResultCard type={data.type}/>
            </div>
        )
    }

}