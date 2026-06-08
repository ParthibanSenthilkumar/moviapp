import React from 'react'
import './App.css'
import {  useLocation } from 'react-router-dom'
import Allroutes from './Router/Allroutes'
import Header from './Components/Header'
import Toaster from './Components/Toaster'
import FavmovieProvider from './Context/FavmovieProvider'
import Footer from './Components/Footer'
import UserProfileProvider from './Context/UserProfileProvider'


function App() {

  let location=useLocation()

  let hideLayout=
    location.pathname === "/"||
    location.pathname === "/register"
  
  return (
    <>

        <FavmovieProvider>
          <UserProfileProvider>
          {!hideLayout && <Header />}  
            <Toaster />
            <Allroutes />
          {!hideLayout && <Footer />}  
          </UserProfileProvider>
          </FavmovieProvider>
    </>
  )
}

export default App
