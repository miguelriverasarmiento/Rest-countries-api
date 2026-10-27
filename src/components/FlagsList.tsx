import { useState, useEffect } from "react"
import data from '../api/data.json'
import {Pagination} from './Pagination'
import { type Country } from '../types/Country'

const formatPopulation = (population: number) =>
  new Intl.NumberFormat('en-US').format(population)

interface Props {
    countrySearch: string;
    regionFilter: string;
    onCountryClick: (country: Country) => void
}

export const FlagsList = ({ countrySearch, regionFilter, onCountryClick }: Props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredCountries = data.filter((country) => {
        const matchesSearch = country.name.toLowerCase().includes(countrySearch.toLowerCase());
        const matchesRegion = regionFilter === "" || country.region === regionFilter;
        return matchesSearch && matchesRegion;
    });

    useEffect(() => {
        setCurrentPage(1); // Reset to first page when filters change
    }, [countrySearch, regionFilter]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginationCountries = filteredCountries.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)

    return (
    <div className="flex flex-wrap sm:mx-14 md:mx-18 mt-2 justify-between gap-10">
        {paginationCountries.map(country => (
            <div 
                key={country.name}
                onClick={() => onCountryClick(country)}
                className='mx-13 md:mx-auto w-68 h-95 rounded-md shadow-md bg-white dark:bg-Blue-900-Dark-Mode-Elements dark:text-white flex flex-col transition-colors cursor-pointer'
            >
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
        <div className="w-full flex justify-center mt-8">
            <div className="flex items-center justify-center mx-auto mt-8 mb-8">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    </div>
  )
}
