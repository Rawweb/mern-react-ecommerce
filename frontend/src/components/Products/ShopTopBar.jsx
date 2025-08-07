import React from 'react';
import { IoGrid, IoChevronDown } from 'react-icons/io5';
import { FaThList } from 'react-icons/fa';
import { Listbox } from '@headlessui/react';

const ShopTopBar = ({
  currentCategory,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  onCategoryChange,
  onPriceChange,
}) => {
  const priceRanges = [
    { label: '$0.00 - 99.99', min: 0, max: 99.99 },
    { label: '$100.00 - 199.99', min: 100, max: 199.99 },
    { label: '$200.00 - 299.99', min: 200, max: 299.99 },
    { label: '$300.00 - 399.99', min: 300, max: 399.99 },
    { label: '$400.00+', min: 400, max: Infinity },
  ];

  const sortOptions = [
    { label: 'Sort by', value: 'default' },
    { label: 'Price Low to High', value: 'price-asc' },
    { label: 'Price High to Low', value: 'price-desc' },
    { label: 'Name A-Z', value: 'nameAsc' },
    { label: 'Name Z-A', value: 'nameDesc' },
  ];

  const categories = [
    { label: 'All Rooms', value: 'default' },
    { label: 'Living Room', value: 'Living Room' },
    { label: 'Bedroom', value: 'Bedroom' },
    { label: 'Kitchen', value: 'Kitchen' },
    { label: 'Bathroom', value: 'Bathroom' },
    { label: 'Dining Room', value: 'Dining' },
    { label: 'Office', value: 'Office' },
    { label: 'Outdoor', value: 'Outdoor' },
  ];

  return (
    <div className="mb-6 mt-5 px-2 md:px-0">
      <div className="flex justify-between items-end">
        <h2 className="sm:text-lg text-base font-semibold hidden lg:block text-black dark:text-white">
          {currentCategory || 'All Products'}
        </h2>

        {/* Desktop Filters */}
        <div className="hidden sm:flex gap-2 items-center lg:hidden">
          {/* Categories */}
          <div className="w-full">
            <h1 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">
              Categories
            </h1>
            <select
              onChange={e => onCategoryChange(e.target.value)}
              value={currentCategory || 'default'}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="w-full">
            <h1 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">
              Price
            </h1>
            <select
              onChange={e => {
                const [min, max] = e.target.value.split(',').map(Number);
                onPriceChange(min, isNaN(max) ? Infinity : max);
              }}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="">All Prices</option>
              {priceRanges.map(range => (
                <option
                  key={range.label}
                  value={`${range.min},${
                    range.max === Infinity ? 'Infinity' : range.max
                  }`}
                >
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Sort and View */}
        <div className="hidden sm:flex items-center gap-2">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <div className="flex gap-1">
            <button onClick={() => setViewMode('grid')}>
              <IoGrid
                className={`${
                  viewMode === 'grid'
                    ? 'text-black dark:text-white'
                    : 'text-gray-400'
                } sm:size-6 size-5`}
              />
            </button>
            <button onClick={() => setViewMode('list')}>
              <FaThList
                className={`${
                  viewMode === 'list'
                    ? 'text-black dark:text-white'
                    : 'text-gray-400'
                } sm:size-6 size-5`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="flex flex-col gap-4 sm:hidden mt-6">
        {/* Category Dropdown */}
        <div>
          <h1 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
            Categories
          </h1>
          <Listbox
            value={currentCategory || 'default'}
            onChange={value =>
              onCategoryChange(value === 'default' ? undefined : value)
            }
          >
            <div className="relative">
              <Listbox.Button className="w-full flex justify-between items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                {
                  categories.find(
                    opt => opt.value === (currentCategory || 'default')
                  )?.label
                }
                <IoChevronDown className="ml-2" />
              </Listbox.Button>
              <Listbox.Options className="mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-sm max-h-60 overflow-y-auto text-sm z-0">
                {categories.map(option => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={({ active }) =>
                      `cursor-pointer px-3 py-2 ${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-800 dark:text-white'
                      }`
                    }
                  >
                    {option.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Price Dropdown */}
        <div>
          <h1 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
            Price
          </h1>
          <Listbox
            value={''}
            onChange={value => onPriceChange(value[0], value[1])}
          >
            <div className="relative">
              <Listbox.Button className="w-full flex justify-between items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                All Prices
                <IoChevronDown className="ml-2" />
              </Listbox.Button>
              <Listbox.Options className="mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-sm max-h-60 overflow-y-auto text-sm z-0">
                {[{ label: 'All Prices', value: '' }, ...priceRanges].map(
                  option => (
                    <Listbox.Option
                      key={option.label}
                      value={option.value}
                      className={({ active }) =>
                        `cursor-pointer px-3 py-2 ${
                          active
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-800 dark:text-white'
                        }`
                      }
                    >
                      {option.label}
                    </Listbox.Option>
                  )
                )}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Sort & View */}
        <div className="flex justify-between items-center">
          <div className="w-full">
            <Listbox value={sortBy} onChange={setSortBy}>
              <div className="relative">
                <Listbox.Button className="w-full flex justify-between items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {sortOptions.find(opt => opt.value === sortBy)?.label ||
                    'Sort by'}
                  <IoChevronDown className="ml-2" />
                </Listbox.Button>
                <Listbox.Options className="mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-sm max-h-60 overflow-y-auto text-sm z-0">
                  {sortOptions.map(option => (
                    <Listbox.Option
                      key={option.value}
                      value={option.value}
                      className={({ active }) =>
                        `cursor-pointer px-3 py-2 ${
                          active
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-800 dark:text-white'
                        }`
                      }
                    >
                      {option.label}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          <div className="flex gap-2 ml-2">
            <button onClick={() => setViewMode('grid')}>
              <IoGrid
                className={`${
                  viewMode === 'grid'
                    ? 'text-black dark:text-white'
                    : 'text-gray-400'
                } size-5`}
              />
            </button>
            <button onClick={() => setViewMode('list')}>
              <FaThList
                className={`${
                  viewMode === 'list'
                    ? 'text-black dark:text-white'
                    : 'text-gray-400'
                } size-5`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTopBar;
