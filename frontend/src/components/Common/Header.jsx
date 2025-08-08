import React from 'react';
import Topbar from '../Layout/Topbar';
import Navbar from './Navbar';
import DarkModeToggle from './DarkkModeToggle'; // Adjust the path if needed

const Header = () => {
  return (
    <div className="relative">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Floating Dark Mode Toggle */}
      <div className="fixed bottom-12 right-6 z-50">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
