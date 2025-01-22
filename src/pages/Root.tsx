import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Root = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/Login")
    }, [])

    return(
        <div className="Root">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Root