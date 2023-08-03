import { Route, Routes } from 'react-router-dom'
import './App.css'
import Shipping from './assets/components/component/Shipping'
import Dashboard from './assets/components/page/Dashboard'
import Sales from './assets/components/component/Sales'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/shipping' element={<Shipping />} />        
      <Route path='/sales' element={<Sales />} /> 
    </Routes>
    </>
  )
}

export default App
