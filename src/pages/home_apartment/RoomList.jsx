import React from 'react'
import RoomInfo from './RoomInfo'

export default function RoomList({ roomsInfo }) {
    return (
        <div className="flex flex-col gap-4">
            {roomsInfo.map((room, index) => {
                return <RoomInfo roomInfo={room} key={index} />
            })}
        </div>
    )
}
