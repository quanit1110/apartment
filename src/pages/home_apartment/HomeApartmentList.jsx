import React from 'react'
import { HomeApartment } from './HomeApartment'

export default function HomeApartmentList({ apartments }) {
    return (
        <div className="mx-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8">
                {apartments.map((aparment, index) => {
                    return <HomeApartment key={index} apartment={aparment} />
                })}
            </div>
        </div>
    )
}
