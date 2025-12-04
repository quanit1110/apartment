import React from 'react'

const AddNewApartment = () => {
  return (
    <main className="flex-grow p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.03em]">Thêm nhà trọ mới</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal mt-2">Vui lòng điền đầy đủ thông tin bên dưới để thêm một nhà trọ mới vào hệ thống.</p>
        </div>
        <form className="space-y-8 bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="name">Tên nhà trọ</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="name" name="name" placeholder="Ví dụ: Nhà trọ An Bình" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="address">Địa chỉ</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="address" name="address" placeholder="Ví dụ: 123 Đường ABC, Quận 1, TP.HCM" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="phone">Số điện thoại liên hệ</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="phone" name="phone" placeholder="Số điện thoại của nhà trọ" type="tel" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="landlordPhone">Số điện thoại chủ nhà</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="landlordPhone" name="landlordPhone" placeholder="Số điện thoại của chủ nhà" type="tel" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="tenantName">Tên người thuê hiện tại</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="tenantName" name="tenantName" placeholder="Tên người đang thuê (nếu có)" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="landlordName">Tên chủ nhà</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="landlordName" name="landlordName" placeholder="Tên đầy đủ của chủ nhà" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="taxNumber">Mã số thuế</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="taxNumber" name="taxNumber" placeholder="Mã số thuế kinh doanh (nếu có)" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="rentAmount">Số tiền thuê (VND)</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="rentAmount" name="rentAmount" placeholder="Ví dụ: 3000000" type="number" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="totalRooms">Tổng số phòng</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="totalRooms" name="totalRooms" placeholder="Ví dụ: 10" type="number" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="currentRoomAvailable">Số phòng còn trống</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="currentRoomAvailable" name="currentRoomAvailable" placeholder="Ví dụ: 2" type="number" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="rentalDate">Ngày thuê</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="rentalDate" name="rentalDate" type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="rentalPeriod">Thời hạn thuê (tháng)</label>
              <input className="w-full h-11 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="rentalPeriod" name="rentalPeriod" placeholder="Ví dụ: 12" type="number" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300" for="imageUrls">URL hình ảnh</label>
              <textarea className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-colors" id="imageUrls" name="imageUrls" placeholder="Nhập mỗi URL trên một dòng" rows="3"></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-lg h-11 px-5 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors" type="button">
              <span className="truncate">Hủy</span>
            </button>
            <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" type="submit">
              <span className="material-symbols-outlined text-xl">save</span>
              <span className="truncate">Lưu thông tin</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AddNewApartment