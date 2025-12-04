import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import HomePage from './pages/body/HomePage'
import HomeApartmentDetail, { loader as apartmentDetailLoader } from './pages/home_apartment/HomeApartmentDetail'
import NewApartment from './pages/home_apartment/AddNewApartment'
import NewRoom from './pages/home_apartment/NewRoom'
import NewCharge from './pages/home_apartment/NewCharge'
import { HomeApartment } from './pages/home_apartment/HomeApartment'
import Main from './components/main/Main'
import RoomDetail, { loader as roomDetail } from './pages/home_apartment/RoomDetail'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <Error />
        },
        {
          path: '/apartment-detail/:id', // đối với khai báo link nếu có dấu / ở đầu thì nó sẽ lấy đúng đường dẫn nestest, còn nếu bỏ / thì nó sẽ concat với link hiện tại
          element: <HomeApartmentDetail />,
          loader: apartmentDetailLoader, // cần khai báo loader nếu muốn sử dụng useLoaderData trong react-router-dom
          errorElement: <Error />
        },
        {
          path: '/room-detail/:id',
          element: <RoomDetail />,
          loader: roomDetail, // cần khai báo loader nếu muốn sử dụng useLoaderData trong react-router-dom
          errorElement: <Error />
        },
        { path: '/new-apartment', element: <NewApartment />, errorElement: <Error /> },
        { path: '/new-room', element: <NewRoom />, errorElement: <Error /> },
        { path: '/new-charge', element: <NewCharge />, errorElement: <Error /> },
      ],
    },
    { path: '/login', element: <Login />, errorElement: <Error /> },
    { path: '/register', element: <Login />, errorElement: <Error /> },
  ])
  return (
    <div>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </div>
  )
}

export default App
