'use client';
import React, { useState } from 'react';
import NavbarV2 from '@/Components/Navbar/NavbarV2';
import logo from '../../app//Resources/Images/bloggilogo.png';
import SideBarComponent from '@/Components/Sidebar/SideBarComponent';
import Dashboard3 from '@/Components/Home/TopVoice';
import PostHome2 from '@/Components/Home/PostHome2';
import BottomNav from '@/Components/BottomNavigation/BottomNav';

function Layout({ children }) {
  const [nav, setNav] = useState(false);

  const navSetting = () => {
    setNav(!nav);
  };

  return (
    <div>
      <main className='flex flex-row relative '>
      
          <SideBarComponent nav={nav} />
        <div className='w-[100%]  flex flex-col'>
          <NavbarV2 navSetting={navSetting} />
          {children}
        </div>
        <BottomNav />
      </main>
    </div>
  );
}

export default Layout;