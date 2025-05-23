import { useState } from 'react'
import './assets/css/style.css'
import Footers from './assets/components/Footers'
import Headers from './assets/components/Headers'
import Main from './assets/components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './assets/components/Register'
import Login from './assets/components/Login'
import AuthProvider from './AuthProvider';

function App() {

  return (
    <>  
      <AuthProvider>
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footers />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
