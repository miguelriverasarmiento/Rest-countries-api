import React from 'react'

export const Input = () => {
  return (
    <div className="relative">
      <img src="src/assets/icons/lupa.png" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" alt="lupa" />
      <input type="text" placeholder="Search for a country..." className="border-none outline-none w-120 h-10 rounded-md shadow-md bg-white pl-10 pr-4"/>
    </div>
  )
}
