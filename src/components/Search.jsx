import React from 'react'
import { CiSearch  } from "react-icons/ci";

const Search = ({onClose}) => {
  return (
    <div className="w-full bg-white py-8 flex justify-center relative z-10">
      <div className="w-[60%] relative">
        <input
          type="search"
          placeholder="Search For Products in our site"
          className="w-full border  bg-white border-gray-300 rounded-full py-3 pl-12 pr-4 outline-none"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        <CiSearch/>
        </span>
      </div>
    </div>
  )
}

export default Search
