import React from 'react'
import NavLinks from './NavLinks'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // return (
  //   <div className="flex navbar navbar-center border-2 border-gray-400 rounded-full border-collapse mr-20 ">
  //     <div className="navbar-start">
  //       <div className="dropdown">
  //         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-5 w-5"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M4 6h16M4 12h16M4 18h7"
  //             />
  //           </svg>
  //         </div>
  //         <ul
  //           tabIndex={0}
  //           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-2 rounded-box w-60 "
  //         >
  //           <NavLinks />
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="navbar-center">
  //       <a className="btn btn-ghost text-4xl text-orange-500">Q&Q</a>
  //     </div>
  //     <div className="navbar-end">
  //       <button className="btn btn-ghost btn-circle">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  //           />
  //         </svg>
  //       </button>
  //       <button className="btn btn-ghost btn-circle">
  //         <div className="indicator">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-5 w-5"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  //             />
  //           </svg>
  //           <span className="badge badge-xs badge-primary indicator-item"></span>
  //         </div>
  //       </button>
  //     </div>
  //   </div>
  // )

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-10">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1 flex flex-col">
                <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Danh sách nhà trọ
                </a>
                <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Hóa đơn
                </a>
                <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Báo cáo
                </a>
                <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Đăng nhập
                </a>
                <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Đăng ký
                </a>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Navigation */}
      {/* <div className="hidden md:flex flex-1 justify-center items-center gap-9 relative"> */}
      <Link to={"/"} className="hidden md:flex flex-1 justify-center items-center gap-9 relative">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold">Motel Manager</h2>
      </Link>
      {/* </div> */}
    </header>
  );


  // return (
  //   <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-10">
  //     {/* Navigation */}
  //     {/* <div className="hidden md:flex flex-1 justify-center items-center gap-9 relative"> */}

  //     {/* Logo + Title */}
  //     <div className="flex items-center gap-4 text-gray-900 dark:text-white">
  //       {/* Dropdown menu */}
  //       <div className="relative">
  //         <button
  //           onClick={() => setIsOpen(!isOpen)}
  //           className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
  //         >
  //           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  //           </svg>
  //         </button>


  //         {isOpen && (
  //           <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
  //             <div className="py-1 flex flex-col">
  //               <a
  //                 href="#"
  //                 className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
  //               >
  //                 Danh sách nhà trọ
  //               </a>
  //               <a
  //                 href="#"
  //                 className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
  //               >
  //                 Hóa đơn
  //               </a>
  //               <a
  //                 href="#"
  //                 className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
  //               >
  //                 Báo cáo
  //               </a>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       {/* </div> */}
  //       <div className="size-6 text-primary">
  //         <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
  //         </svg>
  //       </div>
  //       <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">MotelManager</h2>
  //     </div>


  //     {/* Buttons */}
  //     <div className="flex items-center gap-2">
  //       <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
  //         <span className="truncate">Đăng nhập</span>
  //       </button>
  //       <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
  //         <span className="truncate">Đăng ký</span>
  //       </button>
  //     </div>
  //   </header>
  // );

}

export default Navbar
