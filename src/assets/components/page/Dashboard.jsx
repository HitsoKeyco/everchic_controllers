import React from 'react'
import Sidebar from '../component/Sidebar'
import Shipping from '../component/Shipping'
import '../styles/dashboard.css'
import Header from '../component/Header'

const Dashboard = () => {
  
  return (
    <>
    <div className="app">
        <Sidebar className="sidebar"/>

        <div className="content">
          <Header />
          <Shipping />
        </div>
        
    </div>
    </>
  )
}

export default Dashboard