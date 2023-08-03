
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import '../styles/shipping.css'
import CardCustomers from './CardCustomers'
import CardInfoCustomers from './CardInfoCustomers'

const Shipping = () => {

    const baseUrl = 'https://everchic-service.onrender.com/api/v1'
    // const baseUrl = 'http://localhost:8080/api/v1'
    const [infoApi, getOne, getApi, createRegister, deleteRegister, updateRegister, customerInfo] = useFetch(baseUrl)

    useEffect(() => {
        getApi('/customers')
    }, [])
    
    

    return (
        <>
        <div className="shipping_container">
            <CardCustomers infoApi={infoApi} getOne={getOne} />
            
        </div>
        </>
    )
}

export default Shipping


