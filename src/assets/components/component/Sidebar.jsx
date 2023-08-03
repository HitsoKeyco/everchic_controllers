import React, { useState } from 'react'


import { BsArrowBarLeft, BsArrowBarRight, BsBarChartLineFill, BsCashCoin, BsCashStack, BsBuildingsFill, BsFillCartPlusFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import '../styles/sidebar.css'

const Sidebar = () => {
  const [handleCloseSidebar, setHandleCloseSidebar] = useState(false);

  const Saludo = () => {
    setHandleCloseSidebar(!handleCloseSidebar);
  };

  return (
    <>
      <div className={`cont_sidebar ${handleCloseSidebar ? 'small' : ''}`}>
        <div className="cont_logo">
          <h2 className='name_logo'>Everchic <div className="line"></div></h2>
          <BsArrowBarRight className={`open_sidebar ${handleCloseSidebar ? 'show_icon_sideBar' : ''}`} onClick={Saludo}/>
          <BsArrowBarLeft className={`close_sidebar ${handleCloseSidebar ? 'hidden' : ''}`} onClick={Saludo} />
          
        </div>
        <ul className='cont_list_sidebar'>
          <div className={`title_dashboard ${handleCloseSidebar ? 'hidden' : ''}`}><img src="/public/img_01.svg" alt="" /><p className='p_dashboard'></p></div>
          
          <li className='sidebar_li'><BsBarChartLineFill className={`links ${handleCloseSidebar ? 'resize_icon' : ''}`} /><a href="" className={`links ${handleCloseSidebar ? 'hidden' : ''}`}>Analitica</a></li>
          <li className='sidebar_li'><BsCashCoin className={`links ${handleCloseSidebar ? 'resize_icon' : ''}`}/><a href=""className={`links ${handleCloseSidebar ? 'hidden' : ''}`}>Ventas</a></li>
          <li className='sidebar_li'><BsCashStack className={`links ${handleCloseSidebar ? 'resize_icon' : ''}`}/><a href=""className={`links ${handleCloseSidebar ? 'hidden' : ''}`}>Gastos</a></li>
          <li className='sidebar_li'><BsBuildingsFill className={`links ${handleCloseSidebar ? 'resize_icon' : ''}`}/><a href=""className={`links ${handleCloseSidebar ? 'hidden' : ''}`}>Proveedores</a></li>
          <li className='sidebar_li'><BsFillCartPlusFill className={`links ${handleCloseSidebar ? 'resize_icon' : ''}`}/><a href=""className={`links ${handleCloseSidebar ? 'hidden' : ''}`}>Pedidos</a></li>
          <li className='sidebar_li'><FaShippingFast className={`links ${handleCloseSidebar ? 'resize_icon' : ''}`}/><a href=""className={`links ${handleCloseSidebar ? 'hidden' : ''}`}>Ordenes</a></li>
        </ul>

      </div>
    </>
  );
};

export default Sidebar;
