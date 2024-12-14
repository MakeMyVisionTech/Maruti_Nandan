import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <div>
        <Navbar />
      <Header  />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
