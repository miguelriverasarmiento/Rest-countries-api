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
        <select className="w-full sm:w-auto bg-white dark:bg-Blue-900-Dark-Mode-Elements dark:text-white border-none outline-none shadow-md rounded-md px-4 py-3">
            <option value="">Filter by Region&nbsp;&nbsp;</option>
            {uniqueRegions.map((region) => ( // Renderiza cada región una sola vez.
                <option key={region} value={region}>
                    {region}
                </option>
            ))}
        </select>
  )
}
