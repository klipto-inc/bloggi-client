'use client';

import NavbarV2 from '@/Components/Navbar/NavbarV2';
import React from 'react';
import logo from '../../app//Resources/Images/bloggilogo.png';
import SideBarComponent from '@/Components/Sidebar/SideBarComponent';
import Dashboard from '@/Components/Home/Dashboard';
import PostHome2 from '@/Components/Home/PostHome2';
import SuggestedUsers from '@/Components/Home/SuggestedUsers';
import TopInterest from '@/Components/Home/TopInterest';
import PodiPreview from '@/Components/Dashboard/PodiPreview';
import TopVoice from '@/Components/Home/TopVoice';

const page = () => {
  return (
    <div className='bg-gray-200 md:bg-white md:bg-transparent w-full'>
      <Dashboard />

      <div className="mb-40">
        <PodiPreview />
      </div>

      {/* <TopVoice /> */}

      <div className='flex flex-col lg:flex-row w-full'>
        <div className='flex flex-col w-[60%]'>
          <PostHome2 />
        </div>

        <div className='flex flex-col w-[40%]'>
          <TopInterest />
          {/* <SuggestedUsers /> */}
        </div>
      </div>

    
    </div>
  );
};

export default page;
