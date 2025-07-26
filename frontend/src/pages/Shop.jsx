import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shopHero from '../assets/shop-hero.jpg';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import ShopTopBar from '../components/Products/ShopTopBar';
import mockProducts from '../data/mockProduct';
import { FaAlignRight } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilters, setActiveFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
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

  // Sorting
  const sortedProducts = [...filterProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'nameAsc') return a.name.localeCompare(b.name);
    if (sortBy === 'nameDesc') return b.name.localeCompare(a.name);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Reset the current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  return (
    <div className="container mx-auto p-6 pt-0 min-h-screen">
      {/* Hero Section */}
      <div className="relative group">
        <img
          src={shopHero}
          alt="Hero Image"
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-30" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4">
          {/* Breadcrumbs */}
          <div className="mb-4 flex items-center gap-2 text-sm md:text-base font-medium text-gray-500">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <span>{'>'}</span>
            <span className="text-black">Shop</span>
          </div>

          {/* Main Heading Content */}
          <h1 className="text-4xl md:text-7xl font-medium mb-4">Shop Page</h1>
          <p className="md:text-xl mb-6 text-black/80">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>

      {/* Main Section Layout: Sidebar + Main Content */}
      <div className="flex gap-10 mt-10">
        {/* Sidebar Filters */}
        <aside className="w-[250px] hidden lg:block">
          {/* Filter content here */}
          <FilterSidebar onFilterChange={setActiveFilters} />
        </aside>

        {/* Main Product Area */}
        <div className="flex-1">
          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="px-2 py-1 border border-gray-300 text-sm inline-flex items-center gap-2 hover:bg-gray-100"
            >
              <FaAlignRight className="size-4" />
              Filter
            </button>
          </div>

          {/* Top bar: Category + Sort + View Options */}
          <ShopTopBar
            currentCategory={activeFilters.category}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          {/* ProductGrid or Empty State */}
          {paginatedProducts.length > 0 ? (
            <ProductGrid products={paginatedProducts} viewMode={viewMode} />
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg font-medium">
                No products match your filters.
              </p>
              <p className="text-sm mt-2">
                Try adjusting your filters or sort options.
              </p>
            </div>
          )}

          {/* Load more button */}
          {/* Pagination */}
          {paginatedProducts.length > 0 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
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
                    <span key={page} className="px-2 text-gray-500">
                      ...
                    </span>
                  );
                }

                return shouldRender ? (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded ${
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
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            className="fixed inset-0 z-50 flex lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <motion.div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setShowMobileFilters(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-in drawer */}
            <motion.div
              initial={{ x: '+100%' }}
              animate={{ x: 0 }}
              exit={{ x: '+100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-4/5 max-w-sm bg-white p-4 overflow-y-auto h-full shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 text-xl"
                >
                  ×
                </button>
              </div>

              <FilterSidebar onFilterChange={setActiveFilters} />

              <button
                onClick={() => setShowMobileFilters(false)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded text-sm"
              >
                Apply Filters
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
