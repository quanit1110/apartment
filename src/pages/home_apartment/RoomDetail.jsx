import React from 'react'
import { useLoaderData, useParams, json } from "react-router-dom";
import axios from 'axios';
import Carousel from './Carousel'
import PersonHiringList from './PersonHiringList';


const ROOM_DETAIL_URL = "http://localhost:9092/roomDetail";
export const loader = async ({ params }) => {
    // const { id } = useParams();
    try {
        const res = await axios.get(ROOM_DETAIL_URL);
        // axios trả về object có data
        return json({ roomDetail: res.data }); // ✅ có key apartmentDetail
    } catch (error) {
        throw new Response("Không thể tải dữ liệu", { status: 500 });
    }
};


export default function RoomDetail() {
    const { roomDetail } = useLoaderData();
    const { isRoomAvailable, roomType, roomArea, priceRentalRoom, roomDeposit, imageUrls } = roomDetail;
    const { isFree: isFreeElectric, priceElectric, unitCode: unitCodeElectric } = roomDetail.electric;
    const { isFree: isFreeWater, priceWater, unitCode: unitCodeWater } = roomDetail.water;
    const { isFree: isFreeInternet, internetFee, unitCode: unitCodeInternet } = roomDetail.internet;
    const { isFree: isFreeToilet, cleanFee, unitCode: unitCodeToilet } = roomDetail.toilet;
    const { isFree: isFreeParking, parkingFee, unitCode: unitCodeParking } = roomDetail.parking;
    const { status: statusPolicy, policyCode, rentalDate, expiryDate, imageUrl: imagePolicy } = roomDetail.policyInfo;
    const rentalPerson = roomDetail.rentalPerson;



    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5 md:py-10">
                        <div className="layout-content-container flex flex-col max-w-5xl flex-1 gap-6">
                            <div className="flex flex-wrap gap-2 px-4">
                                <a className="text-primary/80 dark:text-primary/70 text-sm font-medium leading-normal" href="#">Trang chủ</a>
                                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">/</span>
                                <a className="text-primary/80 dark:text-primary/70 text-sm font-medium leading-normal" href="#">Quản lý nhà trọ</a>
                                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">/</span>
                                <a className="text-primary/80 dark:text-primary/70 text-sm font-medium leading-normal" href="#">Nhà A</a>
                                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">/</span>
                                <span className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">Chi tiết phòng P101</span>
                            </div>
                            <div className="flex flex-wrap justify-between gap-4 items-center px-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Chi tiết phòng P101 - Nhà trọ An Bình</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">Quản lý thông tin chi tiết về phòng và người thuê.</p>
                                </div>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-colors">
                                    <span className="material-symbols-outlined text-base"> edit </span>
                                    <span className="truncate">Chỉnh sửa thông tin</span>
                                </button>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-colors">
                                    <span className="material-symbols-outlined text-base"> send </span>
                                    <span className="truncate">Xuất phiếu phòng</span>
                                </button>
                            </div>
                            <Carousel imageUrls={imageUrls} />
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
                                <div className="lg:col-span-2 flex flex-col gap-6">
                                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-background-dark/50 shadow-sm">
                                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Thông tin phòng &amp; Giá thuê</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Trạng thái</p>
                                                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-500/20 px-3 py-1 mt-1">
                                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                                    {!isRoomAvailable && <p className="text-sm font-semibold text-green-800 dark:text-green-300">Đang cho thuê</p>}
                                                    {isRoomAvailable && <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Đang trống</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Loại phòng</p>
                                                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{roomType}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Diện tích</p>
                                                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{roomArea}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Giá thuê cơ bản</p>
                                                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{priceRentalRoom} VNĐ/tháng</p>
                                            </div>

                                            <div className="md:col-span-2">
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Chi phí dịch vụ</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Điện</p>
                                                {isFreeElectric && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">Miễn phí</p>}
                                                {!isFreeElectric && "kWh" === unitCodeElectric && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{priceElectric} VNĐ/kWh</p>}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nước</p>
                                                {isFreeWater && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">Miễn phí</p>}
                                                {!isFreeWater && "M" === unitCodeWater && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{priceWater} VNĐ/người</p>}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Internet</p>
                                                {isFreeInternet && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">Miễn phí</p>}
                                                {!isFreeInternet && "R" === unitCodeInternet && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{internetFee} VNĐ/phòng</p>}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Vệ sinh</p>
                                                {isFreeToilet && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">Miễn phí</p>}
                                                {!isFreeToilet && "R" === unitCodeToilet && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{cleanFee} VNĐ/phòng</p>}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Giữ xe</p>
                                                {isFreeParking && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">Miễn phí</p>}
                                                {!isFreeParking && "C" === unitCodeParking && <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{parkingFee} VNĐ/chiếc</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-background-dark/50 shadow-sm">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Thông tin hợp đồng</h2>
                                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                                <span className="material-symbols-outlined text-base"> download </span>
                                                <span className="truncate">Tải hợp đồng</span>
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Trạng thái hợp đồng</p>
                                                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 dark:bg-yellow-500/20 px-3 py-1 mt-1">
                                                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                                    {statusPolicy === "IF" && <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Đang hiệu lực</p>}
                                                    {statusPolicy === "CE" && <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Sắp hết hạn</p>}
                                                    {statusPolicy === "EP" && <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Đã hết hạn</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Mã hợp đồng</p>
                                                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{policyCode}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Ngày bắt đầu</p>
                                                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{rentalDate}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Ngày kết thúc</p>
                                                <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">{expiryDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PersonHiringList personHiringList={rentalPerson} />
                                {/* <div className="lg:col-span-1">

                                    <div className="w-full border-t border-slate-200 dark:border-slate-700 my-2"></div>
                                    <div className="flex flex-col gap-2">
                                        <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base"> history </span>
                                            <span className="truncate">Xem lịch sử thuê</span>
                                        </button>
                                        <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 text-sm font-medium leading-normal gap-2 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                                            <span className="material-symbols-outlined text-base"> send </span>
                                            <span className="truncate">Gửi thông báo</span>
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
