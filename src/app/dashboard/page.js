'use client';

import NavbarV2 from '@/Components/Navbar/NavbarV2';
import React from 'react';
import logo from '../../app//Resources/Images/bloggilogo.png';
import SideBarComponent from '@/Components/Sidebar/SideBarComponent';
import Dashboard from '@/Components/Home/Dashboard';
import PostHome2 from '@/Components/Home/PostHome2';
import SuggestedUsers from '@/Components/Home/SuggestedUsers';
import TopCreators from '@/Components/Home/TopCreators';
import PodiPreview from '@/Components/Dashboard/PodiPreview';
import TopVoice from '@/Components/Home/TopVoice';
import TopInterest from '@/Components/Home/TopInterest';
import Footer from '@/Components/Footer/Footer';

const page = () => {
  return (
    <div className='bg-gray-200 md:bg-white md:bg-transparent w-full'>
      <Dashboard />

      <div className='mb-2 lg:mb-4'>
        <PodiPreview />
      </div>

      <div className='flex flex-col lg:flex-row w-full gap-2 md:gap-5 mb-3 md:mb-4 lg:mb-10'>
        <div className='flex flex-col w-full lg:w-[63%]'>
          <PostHome2 />
        </div>

        <div className='w-full flex flex-col md:flex-row lg:flex-col gap-2 lg:w-[37%] px-2 mb-4'>
          <TopInterest />
          <div className='w-full lg:sticky lg:top-20 lg:mb-10'>
            <TopCreators />
          </div>

          {/* <SuggestedUsers /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default page;
