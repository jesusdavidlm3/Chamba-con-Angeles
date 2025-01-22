import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { appContext } from "../context/appContext"

const Root = () => {

    const navigate = useNavigate()
    const { logged } = useContext(appContext)

    useEffect(() => {
        navigate("/Login")
    }, [])

    return(
        <div className="Root">
            {logged && <NavBar />}
            <Outlet />
        </div>
    )
}

export default Root