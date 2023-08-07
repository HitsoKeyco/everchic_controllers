import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'animate.css';

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState([])
    const [order, setOrder] = useState()

    //AUTENTICAR ORDER
    const autenticOrder = (path, data) => {
        setOrder(data)
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => {
                const date = res.data
                const dataFiltered = date.find(element => element.num_date == data.num_date)
                if (dataFiltered.customerId !== null) {
                    Swal.fire({
                        title: 'Esta orden ya fue ingresada..!!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                } else {
                    setInfoApi(true)
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Esta orden no existe..!!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }) 
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
                const idCustomer = res.data.id;

                Swal.fire({
                    title: 'Datos enviado..!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                // Asignar customerId al objeto data antes de enviarlo
                data.customerId = idCustomer;

                setInfoApi(prevInfoApi => {
                    if (Array.isArray(prevInfoApi)) {
                        return [...prevInfoApi, res.data]; // Actualiza el estado con la nueva data
                    } else {
                        return [res.data]; // Si prevInfoApi no es un array, crea uno nuevo con el nuevo elemento
                    }
                });

                // Llamamos a updateIdCustomerInOrder después de actualizar el estado
                updateIdCustomerInOrder(idCustomer, order);

                return { success: true, data: res.data };

            })
            .catch(err => {
                console.log(err);
                return { success: false, error: err }; // Devuelve un objeto con éxito falso y el error
            });
    }




    const updateIdCustomerInOrder = (idCustomer, order) => {
        const url = `${baseUrl}/orders`; // URL de la API para actualizar los registros en la tabla "orders"

        // Comprobar si hay algún registro donde dataOrder es igual a num_date
        axios.get(url, { params: { num_date: order.num_date } })
            .then(res => {
                const orderCustomer = parseInt(order.num_date)
                console.log(res.data, orderCustomer)
                const ordersToUpdate = res.data.find(order => order.num_date === orderCustomer);
                console.log(orderCustomer, idCustomer, ordersToUpdate);
                const updateData = { customerId: idCustomer };
                return axios.put(`${url}/${ordersToUpdate.id}`, updateData); // Corregir aquí para usar ordersToUpdate.id
            })
            .catch(error => {
                console.error('Error al obtener registros:', error);
            });
    };




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
        getApi,
        createRegister,
        deleteRegister,
        updateRegister,
        autenticOrder,

    ]
}

export default useFetch