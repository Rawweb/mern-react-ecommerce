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
      <h2 className="text-lg font-semibold">
        {currentCategory || 'All Products'}
      </h2>

      <div className="flex items-center gap-4">
        {/* Sort */}
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="border p-1 text-sm"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
          <option value="new">Newest</option>
        </select>

        {/* View Mode */}
        <div className="flex gap-2">
          <button onClick={() => setViewMode('grid')}>
            <IoGrid
              className={`${
                viewMode === 'grid' ? 'text-black' : 'text-gray-400'
              } size-6`} 
            />
          </button>
          <button onClick={() => setViewMode('list')}>
            <FaThList
              className={`${
                viewMode === 'list' ? 'text-black' : 'text-gray-400'
              } size-6`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopTopBar;
