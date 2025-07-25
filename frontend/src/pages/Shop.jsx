import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shopHero from '../assets/shop-hero.jpg';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import ShopTopBar from '../components/Products/ShopTopBar';



const Shop = () => {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilters, setActiveFilters] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const mockData = [
    {
      _id: "1",
      name: "ShelfStand",
      new: true,
      price: 55.99,
      category:'Living Room',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=9',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 4.5,
    },
    {
      _id: "2",
      name: "Cloth Stand",
      new: false,
      price: 224.99,
      category:'Living Room',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=10',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 3,
    },
    {
      _id: "3",
      name: "Bamboo Basket",
      new: false,
      price: 24.99,
      category:'Living Room',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=11',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 4,
    },
    {
      _id: "4",
      name: "Console PS4 + Pad",
      new: true,
      price: 512.99,
      category:'Dining',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=12',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 5,
    },
    {
      _id: "5",
      name: "Wireless Headphone",
      new: false,
      price: 65.99,
      category:'Bedroom',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=13',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 4.5,
    },
    {
      _id: "6",
      name: "Living Room Chair",
      new: false,
      price: 120.99,
      category:'Bedroom',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=14',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 3.5,
    },
    {
      _id: "7",
      name: "Beiege Table Lamp",
      new: false,
      price: 98.99,
      category:'Kitchen',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=15',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 5,
    },

    {
      _id: "8",
      name: "Towel Pack",
      new: false,
      price: 52.99,
      category:'Kitchen',
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=16',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 3.5,
    },
  ];

  setProducts(mockData);
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
          {/* Top bar: Category + Sort + View Options */}
          <ShopTopBar
            currentCategory={activeFilters.category}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          {/* ProductGrid */}
          <ProductGrid products={filterProducts} viewMode={viewMode} />
          {/* Load more button */}
          <div className="text-center mt-8">
            <button className="border px-6 py-2 rounded">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
