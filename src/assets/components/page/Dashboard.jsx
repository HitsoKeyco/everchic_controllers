import React from 'react'
import Sidebar from '../component/Sidebar'
import '../styles/dashboard.css'
import Header from '../component/Header'
import Shipping from '../component/Shipping'

const Dashboard = () => {

  return (
    <>
    <div className="app">
          <Sidebar className="sidebar"/>
        <div className="content">
          <Header />
          <div className="shipping_container">
            <Shipping />          
          </div>          
        </div>
        
    </div>
    </>
  )
}

export default Dashboard