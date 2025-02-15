import { Button, Upload, Input } from "antd";
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
                        <Button className="Button">Guardar</Button>
                        <Button className="Button">Imprimir</Button>
                        <Button className="Button">Recibos</Button>
                    </div>
                    <div className="form">
                        <Input className="in" placeholder="Cedula" />
                        <div>
                            <Input className="in" placeholder="Nombre Completo" />
                            <Input className="in" placeholder="Numero de contrato" />
                            <Input className="in" placeholder="Tipo de contrato" />
                            <Input className="in" placeholder="Status" />
                        </div>
                    </div>
                    <Dragger className="dragger">
                        <PlusCircleOutlined style={{color: "#e7e14f", fontSize: "40px"}} />
                    </Dragger>
                    <Button className="Button">Guardar</Button>
                </motion.div>
            </div>}
        </AnimatePresence>
    )
}