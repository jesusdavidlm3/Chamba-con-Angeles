import { Modal, Button, Upload, Select } from "antd";
import type { UploadProps } from "antd";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons"
import { buttonPanelIconStyle } from "../AntDIconStyles.js"

interface uploadContractModal {
    client: string,
    onCancel: () => void,
    open: boolean
}

export const UploadContractModal: React.FC<uploadContractModal> = ({client, onCancel, open}) => {

    const { Dragger } = Upload

    return(
        <>{ open && 
            <div className="modalMask" onClick={onCancel}>
                <div className="modal" onClick={e => e.stopPropagation()}>
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
                </div>
            </div>
        }</>
    )
}