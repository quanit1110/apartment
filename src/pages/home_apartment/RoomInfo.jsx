import React from 'react'
import { Link } from 'react-router-dom';

export default function RoomInfo({ roomInfo }) {
    const { id, name, rentalPeriodRoom, priceRentalRoom, currenNumOfPeople, isRoomAvailable } = roomInfo;
    return (
        <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{name} - Số lượng người ở: {currenNumOfPeople}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        <span>{priceRentalRoom} VNĐ / tháng</span><span className="mx-2">·</span><span>{rentalPeriodRoom}</span>
                    </p>
                </div>
                <div className="inline-flex flex-shrink-0 items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-300">{isRoomAvailable ? "Còn trống" : "Đã thuê"}</div>
            </div>
            <Link to={`/room-detail/${id}`} state={{ roomInfo: roomInfo }} className="mt-2 block w-full rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" href="#">Xem chi tiết</Link>
        </div>
    )
}
