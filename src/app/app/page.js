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

const page = () => {
  return (
    <div className='bg-gray-200 md:bg-white md:bg-transparent w-full'>
      <Dashboard />

      <div className='mb-4'>
        <PodiPreview />
      </div>


      <div className='flex flex-col lg:flex-row w-full  gap-5'>
        <div className='flex flex-col w-full lg:w-[63%]'>
          <PostHome2 />
        </div>

        <div className=' hidden md:flex flex-col gap-4 w-[37%]'>
          <TopInterest />
          <div className='sticky top-20 mb-10'>
            <TopCreators />
          </div>

          {/* <SuggestedUsers /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
