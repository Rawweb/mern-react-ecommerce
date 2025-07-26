import React from 'react';
import { IoGrid } from 'react-icons/io5';
import { FaThList } from 'react-icons/fa';


const ShopTopBar = ({
  currentCategory,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="flex justify-between items-center mb-6 px-2 md:px-0 mt-5">
      <h2 className="sm:text-lg text-base font-semibold">
        {currentCategory || 'All Products'}
      </h2>

      <div className="flex items-center gap-2">
        {/* Sort */}
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="border p-1 sm:text-sm text-xs"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
          <option value="nameAsc">Name A-Z</option>
          <option value="nameDesc">Name Z-A</option>
        </select>

        {/* View Mode */}
        <div className="flex gap-1">
          <button onClick={() => setViewMode('grid')}>
            <IoGrid
              className={`${
                viewMode === 'grid' ? 'text-black' : 'text-gray-400'
              } sm:size-6 size-5`} 
            />
          </button>
          <button onClick={() => setViewMode('list')}>
            <FaThList
              className={`${
                viewMode === 'list' ? 'text-black' : 'text-gray-400'
              } sm:size-6 size-5`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopTopBar;
