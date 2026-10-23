interface Props {
  countrySearch: string
  onCountrySearchChange: (value: string) => void
}

export const Input = ({ countrySearch, onCountrySearchChange }: Props) => {
  return (
    <div className="relative">
      <img src="src/assets/icons/lupa.png" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" alt="lupa" />
      <input
        value={countrySearch}
        type="text"
        placeholder="Search for a country..." 
        className="w-full sm:w-[320px] md:w-100 lg:w-120 h-12 rounded-md shadow-md bg-white dark:bg-Blue-900-Dark-Mode-Elements 
        text-Grey-950-Light-Mode-Text dark:text-white placeholder:text-Grey-400-Light-Mode-Input 
        dark:placeholder:text-gray-300 pl-10 pr-4}"
        onChange={(event) => onCountrySearchChange(event.target.value)}
      />
    </div>
  )
}
