import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const appContext = createContext()

function ContextProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [statsData, setStatsData] = useState({ap: 0, agent: 0, vendor: 0, sp: 0})
  
    const fetchData = () => {
        axios.get(`https://unikribbackend.onrender.com/unikrib/count/users`)
        .then(({data}) => {
            // Handle successful response
            console.log(data);
            setStatsData(prevState => ({...prevState, ...data}))
        })
        .catch(error => {
            // Handle error
            console.error(error);
        });
    }

    const fetchHousesData = () => {
        axios.get(`https://unikribbackend.onrender.com/unikrib/count/users`)
        .then(response => {
            // Handle successful response
            console.log(response.data);
        })
        .catch(error => {
            // Handle error
            console.error(error);
        });
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <appContext.Provider value={{loggedIn, setLoggedIn, statsData}}>
            {children}
        </appContext.Provider>
    )
}

export {appContext, ContextProvider}