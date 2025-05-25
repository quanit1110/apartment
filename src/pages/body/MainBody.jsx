import React, { useEffect } from 'react'
import { HomeApartment } from '../home_apartment/HomeApartment'
import axios from 'axios';

const MainBody = () => {
  // const [dataHome, setDataHome] = useEffect([]);
  const x = [1,2,3,4,5,6,7,8];
  // componentDidMount() {
  //   axios.get('https://api.example.com/data')
  //     .then(response => {
  //       // Lưu trữ dữ liệu từ phản hồi vào state
  //       this.setState({ data: response.data });
  //     })
  //     .catch(error => {
  //       // Lưu trữ lỗi vào state
  //       this.setState({ error: error.message });
  //     });
  // }

  return (
    <div className="overflow-hidden">
      
      <div className="mx-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {x.map((index) => {
            return <HomeApartment key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MainBody
