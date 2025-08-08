import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGrid, FiList, FiChevronDown } from 'react-icons/fi';
import { posts as allPosts } from '../data/posts';

const BlogPage = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  const posts = useMemo(() => {
    const sorted = [...allPosts].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sortBy === 'oldest' ? da - db : db - da;
    });
    return sorted;
  }, [sortBy]);

  return (
    <div className="dark:bg-gray-900 min-h-screen text-black dark:text-white">
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-white/30 dark:bg-black/30" />
        <div className="relative z-10">
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mb-2">
            Home / Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold">Our Blog</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Home ideas and design inspiration
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="space-x-4 text-sm font-medium">
            <button className="text-blue-500 border-b-2 border-blue-500 pb-1">
              All Blog
            </button>
            <button className="hover:text-blue-500">Featured</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-blue-500">
                Sort by <FiChevronDown className="ml-1" />
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white dark:bg-gray-700 text-black dark:text-white mt-2 p-2 rounded shadow-lg w-36 z-10">
                <button
                  onClick={() => setSortBy('newest')}
                  className="block w-full text-left py-1 hover:text-blue-500"
                >
                  Newest
                </button>
                <button
                  onClick={() => setSortBy('oldest')}
                  className="block w-full text-left py-1 hover:text-blue-500"
                >
                  Oldest
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`${
                  viewMode === 'grid' ? 'text-blue-500' : 'hover:text-blue-500'
                }`}
                aria-label="Grid view"
              >
                <FiGrid className="size-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`${
                  viewMode === 'list' ? 'text-blue-500' : 'hover:text-blue-500'
                }`}
                aria-label="List view"
              >
                <FiList className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div
          className={`grid ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'grid-cols-1 gap-6'
          }`}
        >
          {posts.map(post => (
            <article key={post.id} className="group">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()} • {post.readTime}{' '}
                  min read
                </p>
                <h2 className="text-lg font-semibold hover:text-blue-500 transition">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {viewMode === 'list' && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
