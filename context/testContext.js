import { createContext } from "react";
import { useState } from "react";

const appContext = createContext()

function ContextProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false)
    // const loggedIn = false

    const logIn = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
    }

    return (
        <appContext.Provider value={{loggedIn, logIn, logout}}>
            {children}
        </appContext.Provider>
    )
}

export {appContext, ContextProvider}