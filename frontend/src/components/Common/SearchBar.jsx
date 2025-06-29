import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';

const SeacrhBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Perform search logic here
      console.log('Searching for:', searchTerm);
      // Reset search term after search
      setSearchTerm('');
    } else {
      console.log('Please enter a search term');
    }
    setIsOpen(false); // Close the search bar after searching
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? 'absolute top-0 left-0 w-full bg-white h-32 z-50' : 'w-auto'
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700 w-full"
            />
            {/* Search Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2  text-gray-600 p-2 hover:text-blue-500"
            >
              <LuSearch className="h-6 w-6" />
            </button>
          </div>
          {/* close Icon */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-500"
          >
            <MdClose className="h-7 w-7" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <LuSearch className="h-6 w-6 text-gray-700 hover:text-blue-500" />
        </button>
      )}
    </div>
  );
};

export default SeacrhBar;
