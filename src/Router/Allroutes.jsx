import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import  Favorites from '../Pages/Favorites'
import Search from '../pages/Search'
import Moviedetails from '../Pages/Moviedetails'
import Tvshow from '../Pages/Tvshow'
import PageNotFound from '../Pages/PageNotFound'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login  /> } />
        <Route path='/home' element={  <Home/>  } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/home/moviedetails/:id" element={<Moviedetails />} />
        <Route path="/tvshow" element={ <Tvshow /> } /> 
        <Route path="/search" element={<Search apipath="search/movie" />} />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </>
  )
}

export default Allroutes