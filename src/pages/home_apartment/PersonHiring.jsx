import React from 'react'

export default function PersonHiring({ personHiring }) {
    const { name, phone, email, idNumber, address, gender, rentalDate, imageUrls } = personHiring;
    return (
        <details className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <summary className="cursor-pointer list-none p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Thông tin người thuê: {name}</h3>
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </div>
            </summary>
            <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-background-dark/50 shadow-sm">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Người thuê hiện tại</h2>
                <div className="flex flex-col items-center gap-4">
                    <img className="h-24 w-24 rounded-full object-cover" data-alt="Avatar of the current tenant, Nguyen Van A." src={imageUrls[0]} />
                    <div className="text-center">
                        <p className="text-lg font-bold text-slate-800 dark:text-white">{name}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tham gia từ {rentalDate}</p>
                    </div>
                </div>
                <div className="w-full border-t border-slate-200 dark:border-slate-700 my-2"></div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400 mt-0.5"> call </span>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Số điện thoại</p>
                            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{phone}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400 mt-0.5"> mail </span>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{email}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400 mt-0.5"> badge </span>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Số CCCD</p>
                            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{idNumber}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400 mt-0.5"> badge </span>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Địa chỉ</p>
                            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{address}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xl text-slate-500 dark:text-slate-400 mt-0.5"> badge </span>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Giới tính</p>
                            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{gender}</p>
                        </div>
                    </div>
                </div>

            </div>
        </details>
    )
}
