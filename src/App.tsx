import { Header } from './components/Header'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { FlagsList } from './components/FlagsList'

function App() {

  return (
    <div>
      <Header />
      <div className="bg-gray-50 w-full h-screen shadow-inner">
        <div className="flex justify-between px-10 py-8">
          <Input />
          <Select />
        </div>
        <div>
          <FlagsList />
        </div>
      </div>
    </div>
  )
}

export default App
