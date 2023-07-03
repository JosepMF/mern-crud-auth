import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/authContext'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>welcome</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<h1></h1>} />
          <Route path='/add-task' element={<h1></h1>} />
          <Route path='/tasks/:id' element={<h1></h1>} />
          <Route path='/profile' element={<h1></h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
