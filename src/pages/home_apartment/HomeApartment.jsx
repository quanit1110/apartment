import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const HomeApartment = ({ apartment }) => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Exterior view of a modern boarding house" style={{ backgroundImage: `url(${apartment.imageUrls[0]})` }}></div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal">{apartment.name}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-1">{apartment.address}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2">Trống: <span className="font-semibold text-green-600 dark:text-green-400">2/10 phòng</span></p>
        <Link to={`/apartment-detail/${apartment.id}`} state={{ apartment: apartment }} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined text-lg">settings</span>
          <span>Quản lý</span>
        </Link>
      </div>
    </div>
  )
}
