import React from 'react';
import Header from '../Common/Header';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return <>
    {/* Header */}
    <Header/>

    {/* Main content */}
    <Outlet />

    {/* Footer */}
  </>;
};

export default UserLayout;
