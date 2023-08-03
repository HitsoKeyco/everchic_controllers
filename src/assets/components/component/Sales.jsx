import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sales = () => {

    const navigate = useNavigate()
    const handleRoute = () => {
        navigate('/sales')
    }

    return (
        <div >Sales</div>
    )
}

export default Sales