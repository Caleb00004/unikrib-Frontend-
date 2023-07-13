import { globalState } from "../api_feature/apiSlice"
import { appContext } from "../context/testContext"
import React, { useContext, useEffect } from "react"

export default function Layout({children}) {
    const {loggedIn, setLoggedIn} = useContext(appContext)
    console.log('WORKING')

    // Checking if autjorization token exist in local storage
    useEffect(() => {
        console.log('layout useEffect')
        const item = localStorage.getItem('token')

        if (item) {
            const data = JSON.parse(item);
            if (new Date().getTime() < data.expiry) {
                globalState.authorizationToken = data.value
                setLoggedIn(true)
            } else {
                localStorage.removeItem(Key)
                globalState.authorizationToken = ''
            }
        }
    },[])



    // This is to pass some props to all chlidren components/pages
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {})
        })
    }

    return (
        <div>
            {renderChildren()}
        </div>
    )
}