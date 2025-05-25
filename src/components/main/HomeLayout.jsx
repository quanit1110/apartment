import React from 'react'
import Navbar from '../navbar/Navbar'
import HeadLine from '../headline/HeadLine'
import MainBody from '../../pages/body/MainBody'
import { Outlet } from 'react-router-dom'
import { HomeApartment } from '../../pages/home_apartment/HomeApartment'


const Main = () => {
  return (
    <div>
        <Navbar/>
        <HeadLine/>
        <Outlet/>
        {/* <MainBody/> */}
    </div>
  )
}

export default Main