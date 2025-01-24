import axios from "axios";

const apiAddress = "import.meta.env."


export class httpMethods{
    constructor(){

    }

    async get(endPoint, token, value){
        try{
            if(value){
                let res = await axios.get(`${apiAddress}/${endPoint}/${value}`)
                return res
            }else{
                let res = await axios.get(`${apiAddress}/${endPoint}`)
                return res
            }
        }catch(err){
            return err
        }
    }

    async post(endPoint, token, value){
        try{
            if(token){
                let res = await axios.post(`${apiAddress}/${endPoint}` )
                return res
            }else{
                let res = await axios.post(`${apiAddress}/${endPoint}` )
                return res
            }
        }catch(err){
            return err
        }
    }

    // async put(endPoint, token, value){
    //     try{
    //         axios.put(`${apiAddress}/${endPoint}`)

    //     }catch(err){
    //         return err
    //     }
    // }

    // async patch(endPoint, token, value){
    //     return axios.patch(`${apiAddress}/${endPoint}`)
    // }

    // async delete(endPoint, token, value){
    //     return axios.delete(`${apiAddress}/${endPoint}`)
    // }
}