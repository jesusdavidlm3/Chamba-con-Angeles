import { Button, Upload, Select } from "antd";
import type { UploadProps } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons"
import { buttonPanelIconStyle } from "../AntDIconStyles.js"
import { motion, AnimatePresence } from 'motion/react'

interface uploadContractModal {
    client: string,
    onCancel: () => void,
    open: boolean
}

export const UploadContractModal: React.FC<uploadContractModal> = ({client, onCancel, open}) => {

    const { Dragger } = Upload

    return(
        <AnimatePresence>
            { open && <div className="modalMask" onClick={onCancel} >
                <motion.div
                    className="modal"
                    onClick={e => e.stopPropagation()}
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{duration: .25}}
                    exit={{scale: 0}}
                >
                    <h1>Jesus Lozano</h1>
                    <div className="Buttons">
                        <Button className="Button">Boton 1</Button>
                        <Button className="Button">Boton 1</Button>
                        <Button className="Button">Boton 1</Button>
                    </div>
                    <div className="form">
                        <Select />
                        <Select />
                        <Select />
                    </div>
                    <Dragger>
                        <PlusCircleOutlined style={buttonPanelIconStyle} />
                    </Dragger>
                    <Button className="Button">Guardar</Button>
                </motion.div>
            </div>}
        </AnimatePresence>
    )
}