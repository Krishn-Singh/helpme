import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="bg-yellow-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-3xl font-semibold">Help Me</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="bg-white rounded-lg py-2 px-3 pr-10 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 absolute right-3 top-3 pointer-events-none"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#signin" className="text-white hover:text-gray-200">Sign In</a>
          <a href="#login" className="text-white hover:text-gray-200">Login</a>
          <div className="hidden md:block">
            <span className="text-white">Call us: +1234567890</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header