import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shopHero from '../assets/shop-hero.jpg';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import ShopTopBar from '../components/Products/ShopTopBar';
import mockProducts from '../data/mockProduct';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilters, setActiveFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const filterProducts = products.filter(product => {
    const matchCategory =
      !activeFilters.category ||
      activeFilters.category === 'All Rooms' ||
      product.category === activeFilters.category;

    const matchSize =
      activeFilters.size?.length === 0 ||
      product.sizes?.some(size => activeFilters.size.includes(size));

    const matchPrice =
      (!activeFilters.minPrice || product.price >= activeFilters.minPrice) &&
      (!activeFilters.maxPrice || product.price <= activeFilters.maxPrice);

    return matchCategory && matchSize && matchPrice;
  });

  const sortedProducts = [...filterProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'nameAsc') return a.name.localeCompare(b.name);
    if (sortBy === 'nameDesc') return b.name.localeCompare(a.name);
    if (sortBy === 'livingRoom')
      return a.category === 'Living Room'
        ? -1
        : b.category === 'Living Room'
        ? 1
        : 0;
    if (sortBy === 'bedroom')
      return a.category === 'Bedroom' ? -1 : b.category === 'Bedroom' ? 1 : 0;
    if (sortBy === 'kitchen')
      return a.category === 'Kitchen' ? -1 : b.category === 'Kitchen' ? 1 : 0;
    if (sortBy === 'bathroom')
      return a.category === 'Bathroom' ? -1 : b.category === 'Bathroom' ? 1 : 0;
    if (sortBy === 'diningRoom')
      return a.category === 'Dining' ? -1 : b.category === 'Dining' ? 1 : 0;
    if (sortBy === 'office')
      return a.category === 'Office' ? -1 : b.category === 'Office' ? 1 : 0;
    if (sortBy === 'outdoor')
      return a.category === 'Outdoor' ? -1 : b.category === 'Outdoor' ? 1 : 0;

    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  return (
    <div className='dark:bg-gray-900'>
      <div className="container mx-auto p-6 pt-0 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        {/* Hero Section */}
        <div className="relative group">
          <img
            src={shopHero}
            alt="Hero Image"
            className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/30 dark:bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            {/* Breadcrumbs */}
            <div className="mb-4 flex items-center gap-2 text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
              <Link to="/" className="hover:text-black dark:hover:text-white">
                Home
              </Link>
              <span>{'>'}</span>
              <span className="text-black dark:text-white">Shop</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-medium mb-4">Shop Page</h1>
            <p className="md:text-xl mb-6 text-black/80 dark:text-white/70">
              Let’s design the place you always imagined.
            </p>
          </div>
        </div>

        {/* Main Section Layout: Sidebar + Content */}
        <div className="flex gap-10 mt-10">
          {/* Sidebar */}
          <aside className="w-[250px] hidden lg:block">
            <FilterSidebar onFilterChange={setActiveFilters} />
          </aside>

          {/* Product Listing Area */}
          <div className="flex-1">
            <ShopTopBar
              currentCategory={activeFilters.category}
              sortBy={sortBy}
              setSortBy={setSortBy}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onCategoryChange={category =>
                setActiveFilters(prev => ({
                  ...prev,
                  category: category === 'default' ? undefined : category,
                }))
              }
              onPriceChange={(min, max) =>
                setActiveFilters(prev => ({
                  ...prev,
                  minPrice: min,
                  maxPrice: max,
                }))
              }
            />

            {/* Product Grid or Empty */}
            {paginatedProducts.length > 0 ? (
              <ProductGrid products={paginatedProducts} viewMode={viewMode} />
            ) : (
              <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                <p className="text-lg font-medium">
                  No products match your filters.
                </p>
                <p className="text-sm mt-2">
                  Try adjusting your filters or sort options.
                </p>
              </div>
            )}

            {/* Pagination */}
            {paginatedProducts.length > 0 && (
              <div className="flex justify-center mt-8 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50 dark:border-gray-700"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  const shouldRender =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(currentPage - page) <= 1;

                  const isEllipsis =
                    (page === currentPage - 2 && page !== 2) ||
                    (page === currentPage + 2 && page !== totalPages - 1);

                  if (isEllipsis) {
                    return (
                      <span
                        key={page}
                        className="px-2 text-gray-500 dark:text-gray-400"
                      >
                        ...
                      </span>
                    );
                  }

                  return shouldRender ? (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 border rounded dark:border-gray-700 ${
                        currentPage === page ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {page}
                    </button>
                  ) : null;
                })}

                <button
                  onClick={() =>
                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50 dark:border-gray-700"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
