import React from 'react';

const TopInterest = () => {
  const users = [
    {
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nicholas Turner',
      bio: 'Passionate about exploring the intersection of technology and art.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Robert Fox',
      bio: 'Dedicated to simplifying complex concepts through visual storytelling.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Arlene McCoy',
      bio: 'Passionate about empowering individuals through the written word.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Kathryn Murphy',
      bio: 'Passionate about building bridges between creativity and technology.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
      name: 'Marvin McKinney',
      bio: 'Committed to spreading positivity and inspiration through social media.',
    },
  ];
  

  return (
    <div className='w-full bg-white lg:max-w-xs rounded-xl bg-layer-2 p-6 shadow'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold text-heading'>Top Creators</h3>
        <button className='inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text'>
          {/* <DotsHorizontalIcon className='h-5 w-5' /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </button>
      </div>

      <ul className='mt-2'>
        {users.map((user) => (
          <li key={user.name}>
            <a
              href='#'
              className='-mx-3 flex space-x-4 rounded-lg py-2 px-3 hover:bg-layer-3 focus:bg-layer-3'>
              <div className='relative inline-block'>
                <img
                  src={user.avatar}
                  alt={`${user.name} avatar`}
                  className='inline-block h-10 w-10 rounded-full object-cover'
                />
                {/* Green Dot */}
                <div className='absolute -bottom-0.5 right-0.5 block h-3.5 w-3.5 rounded-full border-2 border-layer-2 bg-green-500'></div>
              </div>
              <div className='flex-1'>
                <div className='text-sm font-medium text-heading'>
                  {user.name}
                </div>
                <div className='mt-1 text-xs font-medium text-gray-700 line-clamp-1'>{user.bio}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <button className='mt-2 inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-3 py-2 text-xs font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text'>
        View all
      </button>
    </div>
  );
};

export default TopInterest;
