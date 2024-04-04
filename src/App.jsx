
import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'
import NotFound from './views/NotFound'

export const ContextApp = createContext()

function App() {

  const [dataPizzas, setDataPizzas] = useState([])
  const [total, setTotal] = useState(0)

  const getPizzas = async() => {
    const data = await fetch('/pizzas.json')
    const res = await data.json()
    const adaptedPizzas = []
    res.forEach((pizza => {
      adaptedPizzas.push({...pizza, count: 0})
    }))
    setDataPizzas(adaptedPizzas)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <ContextApp.Provider value={{dataPizzas, setDataPizzas, total, setTotal}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pizza/:id' element={<Pizza data={dataPizzas}/>}/>
        <Route path='/carrito' element={<Carrito data={dataPizzas}/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </ContextApp.Provider>
  )
}

export default App
