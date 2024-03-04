'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import { FaCrown } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { FaCirclePlay } from 'react-icons/fa6';
import { FaPodcast } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Dashboard3() {
  const Podi = [
    {
      id: 1,
      name: 'Steven Bartlet',
      image:
        'https://static.independent.co.uk/2022/10/07/08/06114323-90a26a99-d133-44cc-8f36-0b6af597ca1a.jpg',
      verified: true,
      description:
        "World's most influential people, experts and thinkers and embarks on a curiosity driven journey to discover untold truths",
      premium: true,
      like: 800,
      play: 5000,
      date: '22 Feb 2024',
    },
    {
      id: 2,
      name: 'Mc Anderson',
      image:
        'https://www.hollywoodreporter.com/wp-content/uploads/2022/08/Chad-Headshot11.jpeg?w=1296',
      verified: true,
      description:
        'Experts and thinkers and embarks on a curiosity driven journey to discover untold truths',
      premium: true,
      like: 300,
      play: 800,
      date: '22 Feb 2024',
    },
    {
      id: 3,
      name: 'Simon Sinek',
      image:
        'https://renaissancemarketer.com/wp-content/uploads/2023/01/renaissance-marketer-simon-sinek.webp',
      verified: true,
      description:
        "World's most influential people, experts and thinkers and embarks on a curiosity driven journey to discover untold truths",
      premium: true,
      like: 500,
      play: 2000,
      date: '22 Feb 2024',
    },
    {
      id: 4,
      name: 'Hilda Patrick',
      image:
        'https://a.storyblok.com/f/119964/1200x800/0eaa71d1d8/podcast_brandlovev2.jpeg',
      verified: true,
      description:
        "World's most influential people, experts and thinkers and embarks on a curiosity driven journey to discover untold truths",
      premium: true,
      like: 800,
      play: 5000,
      date: '22 Feb 2024',
    },
    {
      id: 5,
      name: 'Martin Cicily',
      image:
        'https://t4.ftcdn.net/jpg/06/03/34/53/360_F_603345302_1eBiHLriYQnDJhhb9gRcYZ9MUuXuFyKD.jpg',
      verified: true,
      description:
        "World's most influential people, experts and thinkers and embarks on a curiosity driven journey to discover untold truths",
      premium: true,
      like: 400,
      play: 1000,
      date: '22 Feb 2024',
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className='my-5 h-auto'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-1 px-2 md:px-8 my-6'>
        <div className='flex flex-row items-center gap-2 text-lg md:text-2xl font-medium'>
          <FaPodcast className='w-6 h-6 stroke-current' />
          <span className='hidden md:block'>Live Audio Session - </span>
          <span className='block md:hidden'>Live Audio Session </span>
        </div>
        <span className=' ml-3 md:ml-0 text-base text-gray-700'>
          coming soon on Bloggi
        </span>
      </div>

      <div className='flex flex-row items-center gap-4 px-2 md:px-5 w-full lg:w-[78vw] overflow-x-auto md:overflow-x-hidden  hover:overflow-x-auto overflow-y-hidden'>
        {Podi &&
          Podi.map((pod) => (
            <div className='mb-4' key={pod.id}>
              <div className='min-w-[300px] max-w-[300px] cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md w-fit'>
                <img
                  src={pod.image}
                  alt='product'
                  className='w-[285px] h-48 object-cover rounded-sm'
                />
                <section className='inset-0 flex flex-col justify-between p-4 text-gray-800'>
                  <header className='space-y-1'>
                    <div className='text-xl font-medium flex flex-row items-center gap-1'>
                      {pod.name}
                      {pod.verified === true ? (
                        <MdVerified className='text-blue-600 text-[16px]' />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className='text-sm text-gray-700 line-clamp-2'>
                      {pod.description}
                    </div>
                  </header>
                  <div className='flex  space-x-3 my-4 w-full transition-all'>
                    <span className='flex items-center space-x-1'>
                      <svg
                        className='h-5 w-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                      </svg>
                      <div>{pod.play}</div>
                    </span>
                    {/* played icon */}
                    <span className='flex items-center space-x-1'>
                      <svg
                        className='h-5 w-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <div>{pod.like}k</div>
                    </span>
                    {/* verified icon */}
                    {/* <span className='flex items-center space-x-1'>
                        <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <div>{pod.date}</div>
                      </span> */}
                  </div>

                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex space-x-2'>
                      {pod.premium === true ? (
                        <span className='rounded-md text-sm px-2 font-medium text-gray-600 flex flex-row items-center gap-2'>
                          <FaCrown className='text-yellow-600' />
                          Premium
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className='p-1 bg-gray-100 rounded-full'>
                      <FaCirclePlay className='text-[30px] text-[#FF3131]' />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard3;
