import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
function App() {
  const Admin = lazy(() => import('./admin/Admin'))
  const AdminHome = lazy(() => import('./admin/AdminHome'))
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/adminhome' element={<AdminHome/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ >
  )
}

export default App
