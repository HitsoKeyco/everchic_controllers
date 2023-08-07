import { useEffect, useState } from 'react'
import useFetch from './assets/hooks/useFetch'
import Order from './assets/components/Order'
import FormularioDatosEnvio from './assets/components/FormularioDatosEnvio'


function App(  ) {
  const baseUrl = 'https://everchic-service.onrender.com/api/v1'
  // const baseUrl = 'http://localhost:8080/api/v1'
  const [infoApi, getApi, createRegister, deleteRegister, updateRegister, autenticOrder] = useFetch(baseUrl)

  const [dataOrder, setDataOrder] = useState(null);
  
  const [renderForm, setRenderForm] = useState()
  
  
  const handleDataOrder = (data) => {
    setDataOrder(data)
  }

  return (
    <>
      {infoApi === true ? (        
          <FormularioDatosEnvio
          createRegister={createRegister}
          dataOrder={dataOrder} />
      ) : (
        <Order autenticOrder={autenticOrder} dataOrder={handleDataOrder} setRenderForm={setRenderForm} />

      )}
    </>
  )
}

export default App
