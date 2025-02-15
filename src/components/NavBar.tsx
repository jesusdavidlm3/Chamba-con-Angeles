import { UserOutlined, SettingOutlined, BellOutlined, BarsOutlined, LogoutOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import NotifPanel from './NotifPanel'
import { useContext, useState } from 'react'
import ConfigPanel from './ConfigPanel'
import { navBarIconStyle } from '../AntDIconStyles'
import { Modal, Tooltip } from 'antd'
import { appContext } from '../context/appContext'
import logo2 from '../img/logo2.png'
// import { logOut } from '../client/ClientePrueba'

const NavBar = () => {

    const {setLogged, setUserData} = useContext(appContext)
    const [configPanelOpen, setConfigPanelOpen] = useState(false)
    const [notifPanelOpen, setNotifPanelOpen] = useState(false)
    const [logoutModal, setLogoutModal] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const openNotif = () => {
        setConfigPanelOpen(false)
        setNotifPanelOpen(!notifPanelOpen)
    }

    const openConfig = () => {
        setConfigPanelOpen(!configPanelOpen)
        setNotifPanelOpen(false)
    }

    const switchSubServerPages = () => {
        if(location.pathname == '/SubServerSearch'){
            navigate('/Dashboard')
        }else{
            navigate('/SubServerSearch')
        }
    }
    const logout = () => {
        // logOut()
        setUserData(null)
        navigate('/Login')
        setLogged(false)
    }

    return(
        <>
            <div className="NavBar">
                <UserOutlined onClick={() => navigate('/Profile')} style={navBarIconStyle}/>

                <img src={logo2} />

                <div>
                    <Tooltip title='Configuracion'>
                        <SettingOutlined onClick={openConfig} style={navBarIconStyle}/>
                    </Tooltip>
                    <Tooltip title='Notificaciones'>
                        <BellOutlined onClick={openNotif} style={navBarIconStyle}/>
                    </Tooltip>
                    <Tooltip title='Inicio'>
                        <BarsOutlined onClick={() => navigate("/home")} style={navBarIconStyle}/>
                    </Tooltip>
                    <Tooltip title='Cerrar Sesion'>
                        <LogoutOutlined onClick={() => setLogoutModal(true)} style={navBarIconStyle}/>
                    </Tooltip>
                </div>
            </div>

            <NotifPanel close={() => setNotifPanelOpen(false)} open={notifPanelOpen}/>
            <ConfigPanel close={() => setConfigPanelOpen(false)} open={configPanelOpen}/>
            <Modal title='Cerrar sesion?' onOk={logout} onCancel={() => setLogoutModal(false)} open={logoutModal}></Modal>
        </>
    )
}

export default NavBar