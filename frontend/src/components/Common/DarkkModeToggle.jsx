import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
    >
      {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
};

export default DarkModeToggle;
