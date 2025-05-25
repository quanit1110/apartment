import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeLayout from './components/main/HomeLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import MainBody from './pages/body/MainBody'
import HomeApartmentDetail from './pages/home_apartment/HomeApartmentDetail'
import NewApartment from './pages/home_apartment/NewApartment'
import NewRoom from './pages/home_apartment/NewRoom'
import NewCharge from './pages/home_apartment/NewCharge'
import { HomeApartment } from './pages/home_apartment/HomeApartment'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <MainBody />,
          errorElement: <Error />
        },
        { path: '/apartment-detail/:id', element: <HomeApartmentDetail /> },
        { path: '/new-apartment', element: <NewApartment /> },
        { path: '/new-room', element: <NewRoom /> },
        { path: '/new-charge', element: <NewCharge /> },
      ],
    },
    { path: '/login', element: <Login />, errorElement: <Error /> },
    { path: '/register', element: <Login />, errorElement: <Error /> },
  ])
  return (
    <RouterProvider router={router}>
      <HomeLayout />
    </RouterProvider>
  )
}

export default App
