import { Header } from './components/Header'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { FlagsList } from './components/FlagsList'
import { useEffect, useState } from 'react'

function App() {

  const [countrySearch, setCountrySearch] = useState('');
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches // Default to system preference if no saved theme
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleDark = () => setIsDark(prev => !prev)

  return (
    <div className="text-Grey-950-Light-Mode-Text dark:text-White-Dark-Mode-Text-&-Light-Mode-Elements min-h-screen bg-Grey-50-Light-Mode-Background dark:bg-Blue-950-Dark-Mode-Background transition-colors duration-200">
      <Header isDark={isDark} toggleDark={toggleDark}/>
      <div className="bg-Grey-50-Light-Mode-Background dark:bg-Blue-950-Dark-Mode-Background w-full min-h-screen shadow-inner">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 sm:px-6 md:px-10 py-6 md:py-8">
          <Input
            countrySearch={countrySearch}
            onCountrySearchChange={setCountrySearch}
          />
          <Select />
        </div>
        <div className="">
          <FlagsList countrySearch={countrySearch} />
        </div>
      </div>
    </div>
  )
}

export default App
