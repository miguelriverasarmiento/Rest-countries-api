import { useState, useEffect } from 'react'
import data from '../api/data.json'

interface Region {
    id: number;
    region: string;
}

export const Select = () => {

    const uniqueRegions = [...new Set(
        data
            .map((country) => country.region)
            .filter((region): region is string => Boolean(region))
            .filter((region) => !['Polar', 'Antarctic', 'Antarctic Ocean'].includes(region))
    )];

    return (
        <select className="bg-white border-none outline-none shadow-md">
            <option value="">Filter by Region&nbsp;&nbsp;</option>
            {uniqueRegions.map((region) => ( // Renderiza cada región una sola vez.
                <option key={region} value={region}>
                    {region}
                </option>
            ))}
        </select>
  )
}
