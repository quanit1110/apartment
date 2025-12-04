import React, { useEffect } from 'react'
import { useLoaderData, useParams, json } from "react-router-dom";
import axios from 'axios';
import RoomList from './RoomList';

const APARTMENT_DETAIL_URL = "http://localhost:9091/apartmentDetail";
export const loader = async ({ params }) => {
  // const { id } = useParams();
  try {
    const res = await axios.get(APARTMENT_DETAIL_URL);
    // axios trả về object có data
    return json({ apartmentDetail: res.data }); // ✅ có key apartmentDetail
  } catch (error) {
    throw new Response("Không thể tải dữ liệu", { status: 500 });
  }
};


const HomeApartmentDetail = () => {
  const { id } = useParams();
  const { apartmentDetail } = useLoaderData();
  const { apartment } = apartmentDetail;
  const { roomsInfo } = apartmentDetail;
  console.log(apartmentDetail);

  return (
    <div className="flex-1">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 lg:text-3xl">{apartment.name}</p>
            <p className="text-sm font-normal text-slate-500 dark:text-slate-400 lg:text-base">Thông tin chi tiết và danh sách phòng</p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto">
            <button className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white text-slate-600 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-xl">edit</span>
            </button>
            <button className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white text-slate-600 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined text-xl">delete</span>
            </button>
            <button className="flex h-10 flex-grow cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-primary/90 sm:flex-grow-0">
              <span className="material-symbols-outlined text-xl">add</span>
              <span className="truncate">Thêm phòng mới</span>
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl h-48 sm:h-64 shadow-sm" data-alt="Exterior view of the motel" style={{ backgroundImage: `url(${apartment.imageUrls[0]})` }}></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">Tổng số phòng</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{apartment.totalRooms}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">Phòng còn trống</p>
                <p className="text-2xl font-bold text-green-500">{apartment.currentRoomAvailable}</p>
              </div>
            </div>
            <details className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer list-none p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Thông tin chi tiết</h3>
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </div>
              </summary>
              <div className="border-t border-slate-200 p-4 dark:border-slate-700">
                <div className="grid grid-cols-1 gap-y-4 text-sm">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Địa chỉ</p>
                    <p className="text-slate-800 dark:text-slate-200">{apartment.address}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Số điện thoại chủ nhà</p>
                    <p className="text-slate-800 dark:text-slate-200">{apartment.lanlordPhone}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Chủ nhà</p>
                    <p className="text-slate-800 dark:text-slate-200">{apartment.landlordName}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Người thuê chính</p>
                    <p className="text-slate-800 dark:text-slate-200">{apartment.tenantName}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Mã số thuế</p>
                    <p className="text-slate-800 dark:text-slate-200">{apartment.taxNumber}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Thời hạn hợp đồng thuê căn nhà</p>
                    <p className="text-slate-800 dark:text-slate-200">Ngày thuê {apartment.rentalDate} .Thời hạn thuê {apartment.rentalPeriod}</p>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-medium text-slate-600 dark:text-slate-400">Giá thuê</p>
                    <p className="text-slate-800 dark:text-slate-200">{apartment.rentAmount}</p>
                  </div>
                </div>
              </div>
            </details>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col flex-wrap items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 w-full sm:w-auto">Danh sách các phòng</h2>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <div className="relative w-full sm:w-64">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                  </div>
                  <input className="block w-full rounded-lg border-slate-200 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500" placeholder="Tìm kiếm phòng..." type="text" />
                </div>
                <select className="rounded-lg border-slate-200 bg-white text-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <option>Tất cả trạng thái</option>
                  <option>Còn trống</option>
                  <option>Đã thuê</option>
                </select>
              </div>
            </div>
            <RoomList roomsInfo={roomsInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeApartmentDetail