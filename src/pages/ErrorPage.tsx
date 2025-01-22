import { useNavigate } from "react-router-dom"
import { WarningOutlined } from '@ant-design/icons'

const ErrorPage = () => {

    const navigate = useNavigate()

    const reset = () => {
        navigate("/login")
    }

    return(
        <div className="ErrorPage">
            <WarningOutlined />
            <h1>Ah ocurrido un error</h1>
            <h3 onClick={reset}>Haga clic aqui para volver</h3>
        </div>
    )
}

export default ErrorPage