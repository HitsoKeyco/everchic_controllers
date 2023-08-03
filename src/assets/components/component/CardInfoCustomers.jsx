import React from 'react'
import '../styles/cardInfoCustomers.css'
const CardInfoCustomers = ({customerInfo}) => {

    console.log(customerInfo)
    return (
        <div className='customer_info_card'>
            <div className='Customer_order_info'>
                <span>Orden N°</span>
                {/* <p>{customers[0]?.orders.num_date}</p> */}
            </div>
            <ul className='customers_ul_card'>
                <li className='customers_li_card'><span className='customer_title_card'>Direccion: </span>{customerInfo?.address}</li>
                <li className='customers_li_card'><span className='customer_title_card'>Observaciones: </span>{customerInfo?.observation}</li>
            </ul>

        </div>
    )
}

export default CardInfoCustomers