import { useState } from "react"
import data from '../api/data.json'
import {Pagination} from './Pagination'

const formatPopulation = (population: number) =>
  new Intl.NumberFormat('en-US').format(population)

export const FlagsList = ({ countrySearch }: { countrySearch: string }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredCountries = data.filter((country) => {
        return country.name.toLowerCase().includes(countrySearch.toLowerCase());
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginationCountries = filteredCountries.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)

    return (
    <div className="flex flex-wrap mx-10 mt-2 justify-between gap-10">
        {paginationCountries.map(country => (
            <div key={country.name} className='w-68 h-95 rounded-md shadow-md bg-white flex flex-col'>
                <div>
                    <img src={country.flags.png} alt={country.name} />
                    <div className='flex flex-col gap-1 mt-3 ml-2 px-4 py-3'>
                        <h2 className="font-bold">{country.name}</h2>
                        <div className='flex flex-col gap-1 mt-3'>
                            <p>
                                <span className='font-medium'>Population:</span> {formatPopulation(country.population)}
                            </p>
                            <p>
                                <span className='font-medium'>Region:</span> {country.region}
                            </p>
                            <p>
                                <span className='font-medium'>Capital:</span> {country.capital}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <div className="flex items-center justify-center mx-auto mt-8 mb-8">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    </div>
  )
}
