import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/home'
import IeltsLayout from './layout/IeltsLayout'
import NotFound from './components/NotFound'
import Vocabulary from './components/Vocabulary'
import Loading from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 500)

    return () => clearTimeout(timer)
  }
    , [])
  if (!loading) {
    return <Loading />
  }
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<IeltsLayout />} >
        <Route index element={<Home />} />
        <Route path='vocabulary' element={<Vocabulary />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
