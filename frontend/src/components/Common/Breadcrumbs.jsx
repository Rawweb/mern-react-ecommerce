import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="text-gray-500 dark:text-gray-400 mb-4" aria-label="Breadcrumb">
      <ol className="list-none flex flex-wrap items-center space-x-1">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center max-w-[150px] truncate">
            {index > 0 && (
              <FiChevronRight className="mx-1 text-gray-400 dark:text-gray-500 text-sm" />
            )}
            {crumb.path ? (
              <Link
                to={crumb.path}
                className="hover:text-blue-500 dark:hover:text-blue-400 hover:font-medium transition duration-300 truncate"
                title={crumb.label}
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                className="font-semibold text-black dark:text-white truncate"
                title={crumb.label}
              >
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
