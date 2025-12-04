import React from 'react'
import PersonHiring from './PersonHiring'

export default function PersonHiringList({ personHiringList }) {
    return (
        <div className="lg:col-span-1">
            {personHiringList.map((personHiring, index) => {
                return <PersonHiring key={index} personHiring={personHiring} />
            })}
        </div>
    )
}
