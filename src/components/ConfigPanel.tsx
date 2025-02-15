import { UserOutlined, MobileOutlined, AppstoreAddOutlined, SettingOutlined, CloseOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { barPanelIconStyles, buttonPanelIconStyle } from '../AntDIconStyles'
import { motion, AnimatePresence } from 'motion/react'
import logo1 from '../img/logo1.png'

interface Panel{
    close: () => void,
    open: boolean
}

const ConfigPanel: React.FC<Panel> = ({close, open}) => {

    const navigate = useNavigate()

    return(
        <AnimatePresence>
        {open && <motion.div className="ConfigPanel"
            initial={{scaleY: 0, y: -350}}
            transition={{duration: .25}}
            animate={{scaleY: 1, y: 0}}
            exit={{scaleY: 0, y: -350}}
        >
            <div className="InsidePanel">
                <div className='bar'>
                    <div>
                        <SettingOutlined style={barPanelIconStyles}/>
                        <h3>Ajustes</h3>
                    </div>
                    <CloseOutlined style={barPanelIconStyles} onClick={close} className='closeButton'/>
                </div>

                <div className="Buttons">
                <div className="Button" onClick={ () => {navigate ('/adminPanel'); close()}}>
                    <SettingOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Administracion</h4>
                            <p>Panel de administracion</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/userCreation'); close()}}>
                        <UserOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Usuario</h4>
                            <p>Creacion de Usuario</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/periphericCreation'); close()}}>
                        <MobileOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Perifericos</h4>
                            <p>Creacion de Perifericos</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/reportCreation'); close()}}>
                        <AppstoreAddOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>Reportes</h4>
                            <p>Creacion de reportes</p>
                        </div>
                    </div>
                    <div className="Button" onClick={() => {navigate ('/SubServerSessions'); close()}}>
                        <AppstoreAddOutlined style={buttonPanelIconStyle}/>
                        <div>
                            <h4>SubServidores</h4>
                            <p>Sesiones de sub servidores</p>
                        </div>
                    </div>
                </div>
                <img src={logo1} />
            </div>
        </motion.div>}
        </AnimatePresence>
    )
}

export default ConfigPanel