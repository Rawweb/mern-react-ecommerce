import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';

const FilterSidebar = ({ onFilterChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: '',
    size: [],
    minPrice: 0,
    maxPrice: Infinity,
  });

  const categories = [
    'All Rooms',
    'Living Room',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Dining',
    'Office',
    'Outdoor',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const priceRanges = [
    { label: '$0.00 - 99.99', min: 0, max: 99.99 },
    { label: '$100.00 - 199.99', min: 100, max: 199.99 },
    { label: '$200.00 - 299.99', min: 200, max: 299.99 },
    { label: '$300.00 - 399.99', min: 300, max: 399.99 },
    { label: '$400.00+', min: 400, max: Infinity },
  ];

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.category) params.set('category', filters.category);
    if (filters.size.length > 0)
      filters.size.forEach(size => params.append('size', size));
    if (filters.minPrice !== 0 || filters.maxPrice !== Infinity) {
      params.set('minPrice', filters.minPrice);
      params.set('maxPrice', filters.maxPrice);
    }

    setSearchParams(params);
  }, [filters]);

  useEffect(() => {
    const category = searchParams.get('category') || '';
    const size = searchParams.getAll('size');
    const minPrice = parseFloat(searchParams.get('minPrice')) || 0;
    const maxPrice = parseFloat(searchParams.get('maxPrice')) || Infinity;

    setFilters({ category, size, minPrice, maxPrice });
  }, []);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters, onFilterChange]);

  return (
    <div className="w-full lg:w-[250px] space-y-6 mt-5 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <FaAlignRight className="size-4" />
        <h3 className="font-semibold text-lg">Filter</h3>
      </div>

      {/* Active Filters */}
      {(filters.category || filters.size.length > 0 || filters.minPrice !== 0 || filters.maxPrice !== Infinity) && (
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <AnimatePresence>
            {filters.category && (
              <motion.span
                key="category"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 text-sm flex items-center gap-1"
              >
                {filters.category}
                <button
                  onClick={() =>
                    setFilters(prev => ({ ...prev, category: '' }))
                  }
                  className="ml-1 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  ×
                </button>
              </motion.span>
            )}

            {filters.size.map(size => (
              <motion.span
                key={size}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 text-sm flex items-center gap-1"
              >
                {size}
                <button
                  onClick={() =>
                    setFilters(prev => ({
                      ...prev,
                      size: prev.size.filter(s => s !== size),
                    }))
                  }
                  className="ml-1 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  ×
                </button>
              </motion.span>
            ))}

            {(filters.minPrice !== 0 || filters.maxPrice !== Infinity) && (
              <motion.span
                key="price"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 text-sm flex items-center gap-1"
              >
                ${filters.minPrice} - {filters.maxPrice === Infinity ? '∞' : `$${filters.maxPrice}`}
                <button
                  onClick={() =>
                    setFilters(prev => ({
                      ...prev,
                      minPrice: 0,
                      maxPrice: Infinity,
                    }))
                  }
                  className="ml-1 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  ×
                </button>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-2 uppercase">Categories</h3>
        <ul className="space-y-1">
          {categories.map(category => (
            <li
              key={category}
              onClick={() => setFilters(prev => ({ ...prev, category }))}
              className={`cursor-pointer px-2 py-1 transition rounded ${
                filters.category === category
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-semibold mb-2 uppercase">Size</h3>
        <ul className="space-y-2">
          {sizes.map(size => (
            <li key={size} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`size-${size}`}
                name="size"
                value={size}
                checked={filters.size.includes(size)}
                onChange={() => {
                  setFilters(prev => {
                    const newSize = prev.size.includes(size)
                      ? prev.size.filter(s => s !== size)
                      : [...prev.size, size];
                    return { ...prev, size: newSize };
                  });
                }}
                className="size-4 accent-blue-500 border border-gray-300 dark:border-gray-600 rounded"
              />
              <label htmlFor={`size-${size}`} className="text-sm">
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-2 uppercase">Price</h3>
        <ul className="space-y-2">
          {priceRanges.map((range, idx) => {
            const isChecked =
              filters.minPrice === range.min && filters.maxPrice === range.max;
            return (
              <li key={idx} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  className="size-4 accent-blue-500 border border-gray-300 dark:border-gray-600 rounded"
                  onChange={() =>
                    setFilters(prev => ({
                      ...prev,
                      minPrice: range.min,
                      maxPrice: range.max,
                    }))
                  }
                />
                <span>{range.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() =>
          setFilters({
            category: '',
            size: [],
            minPrice: 0,
            maxPrice: Infinity,
          })
        }
        className="border border-gray-600 dark:border-gray-400 hover:border-red-500 dark:hover:border-red-400 py-1 px-2 hover:text-red-500 dark:hover:text-red-400 uppercase transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
