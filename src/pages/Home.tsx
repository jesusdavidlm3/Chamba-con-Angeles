import { Input, Button, Skeleton } from "antd"
import { useContext, useEffect, useState } from "react"
import { DoubleRightOutlined, AppstoreAddOutlined, SlidersOutlined, ExportOutlined, SwapRightOutlined } from "@ant-design/icons"
import { appContext } from '../context/appContext'
import { useNavigate } from "react-router-dom"
import { UploadContractModal as UploadContract } from "../components/UploadContractModal"

const SubServerSearch: React.FC = () => {

    const [showList, setShowList] = useState([{name: 'Jesus Lozano', id: '282828'}, {name: 'Angeles Gutierrez', id: '303030'}])
    const navigate = useNavigate()
    const [uploadContractModal, setUploadContractModal] = useState(false)

    // console.log(subServers)
    const slideStyle = {
        color: '#e7e14f',
        fontSize: '20px',
    }
    const exportStyle = {
        color: '#ffb700',
        fontSize: '25px',
        
    }

    return(
        <div className='SubServerSearch'>
            <h1 className='title'>Archivo Digital</h1>
            {showList.length == 0 ? (
                <>    
                    <Skeleton active/>
                    <Skeleton active/>
                </>
            ):(
                <>
                    <div className="searchBar">
                        <Input className='inputSearchBar' variant='filled' placeholder="Buscar..." />
                        <Button icon={<SlidersOutlined style={slideStyle}/>} className="filterButton"/>
                        {/* <Button className='buttonExport' type="text"> <ExportOutlined style={exportStyle}/> </Button> */}
                    </div>

                    <div className="content">
                        <div className="LatPanel">
                            { showList.map((item) => (
                                <div key={item.id} className="ListItem">
                                    <div className="left">
                                        <SwapRightOutlined/>
                                        <p>{ `${item.name} (${item.id})` }</p>
                                    </div>
                                    <div className='badge'></div>
                                </div>
                            ))}
                        </div>
                        <div className="BlockList">
                            { showList.map((item) => (
                                <div key={item.id} className="ListItem" onClick={() => setUploadContractModal(true)}>
                                    <div className="banner">
                                        <div className="subServerIcon"><AppstoreAddOutlined style={{color:'#96ac60', fontSize:'45px'}}/></div>
                                        <div><DoubleRightOutlined rotate={315}/></div>
                                    </div>
                                    <div className='Info'>
                                        <h3>Nombre: {item.name}</h3>
                                        <h5>Cedula: {item.id}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <UploadContract
                        client="Jesus Lozano"
                        onCancel={() => setUploadContractModal(false)}
                        open={uploadContractModal}
                        />
                    </div>   

                    
                </>
            )}
        </div>
    )
}

export default SubServerSearch