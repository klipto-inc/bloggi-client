import React from 'react';

const TopInterest = () => {

  const topBlogCategories = [
    { category: 'Technology', description: 'Stay updated with the latest in tech trends and innovations.' },
    { category: 'Travel', description: 'Explore breathtaking destinations and travel tips for your next adventure.' },
    { category: 'Food', description: 'Discover delicious recipes, food reviews, and culinary inspiration.' },
    { category: 'Fashion', description: 'Get inspired with the latest fashion trends, style tips, and outfit ideas.' },
    { category: 'Health & Wellness', description: 'Learn about fitness routines, mental health, and wellness practices for a balanced life.' },
  ];


  return (

    <div
      aria-label='card'
      className='p-8 rounded-xl shadow bg-white block w-full my-2'>
      <div aria-label='header' className='flex items-center space-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 shrink-0'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11' />
        </svg>
        <div className='space-y-0.5 flex-1'>
          <h3 className='font-medium text-lg tracking-tight text-gray-900 leading-tight'>
            Trending Categories
          </h3>
          <p className='text-sm font-normal text-gray-400 leading-none line-clamp-1'>
            Explore the most popular categories and find your interests.
          </p>
        </div>
        <a
          href='/'
          className='inline-flex items-center shrink-0 justify-center w-8 h-8 rounded-full text-white bg-gray-900 focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M17 7l-10 10' />
            <path d='M8 7l9 0l0 9' />
          </svg>
        </a>
      </div>
      <div aria-label='content' className='mt-9 grid gap-2.5'>
        {topBlogCategories.map((category, index) => (
          <div key={index} className='flex flex-col space-y-1.5 px-5 py-2 rounded-full bg-gray-100'>
            <h3 className='text-sm font-medium'>{category.category}</h3>
            <p className='text-xs text-gray-500 line-clamp-1'>{category.description}</p>
          </div>
        ))}
      </div>
      <button className='mt-2 inline-flex w-full cursor-pointer items-center justify-start rounded-xl border-2 border-transparent bg-transparent px-3 py-2 text-xs font-semibold hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text'>
        View all
      </button>
    </div>
    
  );
};

export default TopInterest;
