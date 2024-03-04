import React from 'react';

const TopInterest = () => {
  const users = [
    {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nicholas Turner',
      role: 'Admin',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
      name: 'Robert Fox',
      role: 'Editor',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Arlene McCoy',
      role: 'Writer',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Kathryn Murphy',
      role: 'Editor',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Marvin McKinney',
      role: 'HR',
    },
  ];

  return (
    // <div
    //   aria-label='card'
    //   className='p-8 rounded-3xl hidden lg:block bg-gray-50 max-w-sm w-full my-2'>
    //   <div aria-label='header' className='flex items-center space-x-2'>
    //     <svg
    //       xmlns='http://www.w3.org/2000/svg'
    //       className='w-8 h-8 shrink-0'
    //       width={24}
    //       height={24}
    //       viewBox='0 0 24 24'
    //       strokeWidth='1.5'
    //       stroke='currentColor'
    //       fill='none'
    //       strokeLinecap='round'
    //       strokeLinejoin='round'>
    //       <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //       <path d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11' />
    //     </svg>
    //     <div className='space-y-0.5 flex-1'>
    //       <h3 className='font-medium text-lg tracking-tight text-gray-900 leading-tight'>
    //         Top Interest Stats
    //       </h3>
    //       <p className='text-sm font-normal text-gray-400 leading-none'>
    //         Daily update
    //       </p>
    //     </div>
    //     <a
    //       href='/'
    //       className='inline-flex items-center shrink-0 justify-center w-8 h-8 rounded-full text-white bg-gray-900 focus:outline-none'>
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         className='w-5 h-5'
    //         width={24}
    //         height={24}
    //         viewBox='0 0 24 24'
    //         strokeWidth='1.5'
    //         stroke='currentColor'
    //         fill='none'
    //         strokeLinecap='round'
    //         strokeLinejoin='round'>
    //         <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //         <path d='M17 7l-10 10' />
    //         <path d='M8 7l9 0l0 9' />
    //       </svg>
    //     </a>
    //   </div>
    //   <div aria-label='content' className='mt-9 grid gap-2.5'>
    //     <a href='#'>
    //       <div className='flex items-center space-x-4 p-3.5 rounded-full bg-gray-100'>
    //         <span className='flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900'>
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             className='w-6 h-6'
    //             width={24}
    //             height={24}
    //             viewBox='0 0 24 24'
    //             strokeWidth='1.5'
    //             stroke='currentColor'
    //             fill='none'
    //             strokeLinecap='round'
    //             strokeLinejoin='round'>
    //             <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //             <path d='M8 16a3 3 0 0 1 -3 3' />
    //             <path d='M16 16a3 3 0 0 0 3 3' />
    //             <path d='M12 16v4' />
    //             <path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
    //             <path d='M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3' />
    //           </svg>
    //         </span>
    //         <div className='flex flex-col flex-1'>
    //           <h3 className='text-sm font-medium'>Air Conditioner</h3>
    //           <div className='divide-x divide-gray-200 mt-auto'>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               2 unit
    //             </span>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               18kWh
    //             </span>
    //           </div>
    //         </div>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           className='w-5 h-5 shrink-0'
    //           width={24}
    //           height={24}
    //           viewBox='0 0 24 24'
    //           strokeWidth={2}
    //           stroke='currentColor'
    //           fill='none'
    //           strokeLinecap='round'
    //           strokeLinejoin='round'>
    //           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //           <path d='M9 6l6 6l-6 6' />
    //         </svg>
    //       </div>
    //     </a>
    //     <a href='#'>
    //       <div className='flex items-center space-x-4 p-3.5 rounded-full bg-gray-100'>
    //         <span className='flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900'>
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             className='w-6 h-6'
    //             width={24}
    //             height={24}
    //             viewBox='0 0 24 24'
    //             strokeWidth='1.5'
    //             stroke='currentColor'
    //             fill='none'
    //             strokeLinecap='round'
    //             strokeLinejoin='round'>
    //             <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //             <path d='M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
    //             <path d='M17 17l0 .01' />
    //             <path d='M13 17l0 .01' />
    //             <path d='M15 13l0 -2' />
    //             <path d='M11.75 8.75a4 4 0 0 1 6.5 0' />
    //             <path d='M8.5 6.5a8 8 0 0 1 13 0' />
    //           </svg>
    //         </span>
    //         <div className='flex flex-col flex-1'>
    //           <h3 className='text-sm font-medium'>Wi-Fi Router</h3>
    //           <div className='divide-x divide-gray-200 mt-auto'>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               1 unit
    //             </span>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               8kWh
    //             </span>
    //           </div>
    //         </div>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           className='w-5 h-5 shrink-0'
    //           width={24}
    //           height={24}
    //           viewBox='0 0 24 24'
    //           strokeWidth={2}
    //           stroke='currentColor'
    //           fill='none'
    //           strokeLinecap='round'
    //           strokeLinejoin='round'>
    //           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //           <path d='M9 6l6 6l-6 6' />
    //         </svg>
    //       </div>
    //     </a>
    //     <a href='#'>
    //       <div className='flex items-center space-x-4 p-3.5 rounded-full bg-gray-100'>
    //         <span className='flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900'>
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             className='w-6 h-6'
    //             width={24}
    //             height={24}
    //             viewBox='0 0 24 24'
    //             strokeWidth='1.5'
    //             stroke='currentColor'
    //             fill='none'
    //             strokeLinecap='round'
    //             strokeLinejoin='round'>
    //             <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //             <path d='M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z' />
    //             <path d='M7 20h10' />
    //             <path d='M9 16v4' />
    //             <path d='M15 16v4' />
    //           </svg>
    //         </span>
    //         <div className='flex flex-col flex-1'>
    //           <h3 className='text-sm font-medium'>Smart Tv</h3>
    //           <div className='divide-x divide-gray-200 mt-auto'>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               2 unit
    //             </span>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               12kWh
    //             </span>
    //           </div>
    //         </div>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           className='w-5 h-5 shrink-0'
    //           width={24}
    //           height={24}
    //           viewBox='0 0 24 24'
    //           strokeWidth={2}
    //           stroke='currentColor'
    //           fill='none'
    //           strokeLinecap='round'
    //           strokeLinejoin='round'>
    //           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //           <path d='M9 6l6 6l-6 6' />
    //         </svg>
    //       </div>
    //     </a>
    //     <a href='#'>
    //       <div className='flex items-center space-x-4 p-3.5 rounded-full bg-gray-100'>
    //         <span className='flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900'>
    //           <svg
    //             xmlns='http://www.w3.org/2000/svg'
    //             className='w-6 h-6'
    //             width={24}
    //             height={24}
    //             viewBox='0 0 24 24'
    //             strokeWidth='1.5'
    //             stroke='currentColor'
    //             fill='none'
    //             strokeLinecap='round'
    //             strokeLinejoin='round'>
    //             <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //             <path d='M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z' />
    //           </svg>
    //         </span>
    //         <div className='flex flex-col flex-1'>
    //           <h3 className='text-sm font-medium'>Humidifier</h3>
    //           <div className='divide-x divide-gray-200 mt-auto'>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               1 unit
    //             </span>
    //             <span className='inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0'>
    //               2kWh
    //             </span>
    //           </div>
    //         </div>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           className='w-5 h-5 shrink-0'
    //           width={24}
    //           height={24}
    //           viewBox='0 0 24 24'
    //           strokeWidth={2}
    //           stroke='currentColor'
    //           fill='none'
    //           strokeLinecap='round'
    //           strokeLinejoin='round'>
    //           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //           <path d='M9 6l6 6l-6 6' />
    //         </svg>
    //       </div>
    //     </a>
    //   </div>
    // </div>
    <div className='w-full max-w-xs rounded-xl bg-layer-2 p-6 shadow'>
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
                <div className='mt-1 text-xs font-medium'>{user.role}</div>
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
