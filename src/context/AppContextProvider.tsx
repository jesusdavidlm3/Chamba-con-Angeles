import { useState } from "react"
import { appContext } from "./appContext"

const AppContextProvider = ({children}) => {

    const [logged, setLogged] = useState(false)
    const [userInfo, setUserInfo] = useState('')

    return(
        <appContext.Provider value={{
            logged,
            setLogged,
            userInfo,
            setUserInfo
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContextProvider