import React from 'react'
import { Link } from 'react-router-dom'

const HeadLine = ({ pageName, userName }) => {
  return (
    // <div className="">
    //     <button className="caret-transparent bg-orange-300 p-5 rounded-e-full my-5 outline-none ">
    //       Home For EveryOne
    //     </button>
    //   </div>
    <div className="flex flex-wrap justify-between items-center gap-4 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Chào
          mừng trở lại!</h1>
        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Đây là danh sách các
          nhà trọ của bạn.</p>
      </div>
      {pageName === "HOME_PAGE" && <Link to={"/new-apartment"} className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"><span className="material-symbols-outlined text-xl">add</span>Thêm phòng trọ</Link>}
      {pageName === "ADD_ROOM" && <button
        className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
        <span className="material-symbols-outlined text-xl">add</span>
        <span className="truncate">Thêm Phòng Trọ</span>
      </button>}

    </div>
  )
}

export default HeadLine