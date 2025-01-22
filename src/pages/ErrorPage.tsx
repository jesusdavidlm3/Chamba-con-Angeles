import { useNavigate } from "react-router-dom"
import { WarningOutlined } from '@ant-design/icons'
import { useContext } from "react"
import { appContext } from "../context/appContext"

const ErrorPage = () => {

    const navigate = useNavigate()
    const { setLogged, setUserInfo } = useContext(appContext)

    const reset = () => {
        setLogged(false)
        setUserInfo(false)
        navigate("/login")
    }

    return(
        <div className="ErrorPage">
            <WarningOutlined style={{fontSize: '200px'}}/>
            <h1>Ah ocurrido un error</h1>
            <h3 onClick={reset}>Haga clic aqui para volver</h3>
        </div>
    )
}

export default ErrorPage