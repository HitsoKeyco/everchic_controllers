import { useState } from 'react'
import axios from 'axios'


const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState([])
    const [customerInfo, setCustomerInfo] = useState()    

    //GET ONE
    const getOne = (path,id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.get(url)
            .then(res => setCustomerInfo(res.data))
            .catch(err => console.log(err))
    }

    //READ
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }

    // CREATE
    const createRegister = (path, data) => {

        const url = `${baseUrl}${path}/`;
        return axios.post(url, data)
            .then(res => {
                const idCustomer = res.data.id;            })
            .catch(err => {
                console.log(err);
                return { success: false, error: err }; // Devuelve un objeto con éxito falso y el error
            });
    }

    //DELETE

    const deleteRegister = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                console.log('aqui')
                //filtramos los elementos para q retornen menos el elemento que eliminamos por id
                const infoApiFiltered = infoApi.filter(element => element.id !== id)
                setInfoApi(infoApiFiltered)
            })
            .catch(err => console.log(err))

    }

    //UPDATE


    const updateRegister = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                console.log(res.data)
                const infoApiUpdate = infoApi.map(element => {
                    if (id === element.id) {
                        return data
                    } else {
                        return element
                    }
                })
                //retornamos los datos actualizados
                setInfoApi(infoApiUpdate)
            })
            .catch(err => console.log(err))

        //UPDATE IDCUSTOMER IN ORDER



    }

    return [
        infoApi,
        getOne,
        getApi,
        createRegister,
        deleteRegister,
        updateRegister,
        customerInfo,
        

    ]
}

export default useFetch