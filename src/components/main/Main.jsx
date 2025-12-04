import React from 'react'
import Navbar from '../navbar/Navbar'
import HeadLine from '../headline/HeadLine'
import { Outlet } from 'react-router-dom'
import { HomeApartment } from '../../pages/home_apartment/HomeApartment'


const Main = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
              <Navbar />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main