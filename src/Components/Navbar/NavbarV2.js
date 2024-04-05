'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../app//Resources/Images/bloggilogo.png';
import React, { useEffect, useRef, useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import { PiCrownBold } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown, IoIosLock } from 'react-icons/io';

const NavbarV2 = ({ navOpen }) => {
  const [nav, setNav] = useState(false);
  const navref = useRef(null);
  const token = Cookies.get('authtoken');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const isAuthenticated = useSelector(
    (state) => state.userauth.isAuthenticated
  );
  const loading = useSelector((state) => state.userauth.loading);
  const error = useSelector((state) => state.userauth.error);

  useEffect(() => {
    dispatch({ type: 'userauth/getUserInformation' });
  }, [dispatch]);

  const OpenNav = (state) => {
    setNav(!nav);
  };

  const DeleteAccount = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/account`,
        {
          headers: {
            Authorization: `Bearer ${String(token)}`,
          },
        }
      );

      if (response.status !== 200) {
        console.log('opps something went wrong, try again');
      }

      Cookies.remove('authtoken');
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch (error) {}
  };

  const SignOutAccount = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'you will be logged out after this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, SignOut!',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = axios.delete(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/account/signout`,
            {
              headers: {
                Authorization: `Bearer ${String(token)}`,
              },
            }
          );

          if (response.status !== 200) {
            console.log('opps something went wrong, try again');
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          }

          Cookies.remove('authtoken');
          if (typeof window !== 'undefined') {
            window.location.reload();
          }

          Swal.fire({
            title: 'We hate to see you go!',
            text: "You've been Signed Out of Bloggi",
            icon: 'success',
          });
        } catch (error) {}
      }
    });
  };

  return (
    <div className='top-0 z-30 w-full sticky bg-white'>
      <nav className='flex gap-2 items-center justify-between w-full h-16 px-3  shadow md:px-8 lg:px-8'>
        <div
          className=' p-1 border border-gray-200 border-opacity-80 rounded-md lg:hidden cursor-pointer '
          onClick={navOpen}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-7 h-7'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>

        <div className='hidden md:flex w-full  flex-row items-center gap-4'>
          <div className='flex items-center hidden md:block'>
            <div className='relative block'>
              <button
                type='button'
                className='relative inline-block px-3 py-2 rounded-full hover:bg-gray-200 '>
                <div className='flex items-center h-5'>
                  <div className='_xpkakx'>
                    <svg
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      role='presentation'
                      focusable='false'
                      style={{
                        display: 'block',
                        height: 16,
                        width: 16,
                        fill: 'currentcolor',
                      }}>
                      <path d='m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z' />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className='w-[80%] flex flex-row-reverse flex-grow-0 flex-shrink bg-gray-100 bg-purple-white rounded-lg'>
            <input
              type='text'
              className=' p-3 border-0 bg-transparent outline-none w-full'
              placeholder='Search here...'
            />

            <div className='p-4 pr-3 text-purple-lighter'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='flex items-center w-[100%] md:hidden bg-gray-100 bg-purple-white rounded-lg'>
          <div className='p-4 text-purple-lighter'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>

          <div
            type='text'
            className=' p-3 border-0 bg-transparent line-clamp-1 outline-none w-full'>
            <span className='text-gray-600 w-full'>Search here...</span>
          </div>
        </div>

        <div className='flex flex-row items-center justify-end w-fit md:w-full'>
          <div className='relative flex items-center justify-end'>
            <div className='block'>
              <div className='relative inline w-full '>
                {!user && (
                  <div className='sm:flex gap-2'>
                    <div className='hidden md:flex'>
                      <Link
                        className='px-5 py-2 text-base font-medium text-gray-900'
                        href='/auth/signup'>
                        Sign Up
                      </Link>
                    </div>
                    <Link
                      className='rounded-md hidden md:flex  bg-[#FF3131] px-7 py-2 md:py-2 text-base flex-row items-center gap-2 font-medium text-white shadow'
                      href='/auth/signin'>
                      Login
                    </Link>

                    <div
                      className=' flex flex-row md:hidden items-center cursor-pointer border border-gray-800 border-opacity-5 rounded-full px-0.5 py-0.5'
                      onClick={OpenNav}>
                      <Link
                        href='/auth/signin'
                        className='relative inline-block w-10 h-10'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='w-full h-full text-gray-700'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}

                {user && (
                  <div className='flex flex-row items-center gap-2'>
                    <div className='mr-4 hidden md:block'>
                      <div className=' sm:flex sm:gap-4'>
                        <Link
                          className='rounded-md bg-[#FF3131] px-7 py-2 text-base font-medium text-white shadow'
                          href='/dashboard/create'>
                          Create
                        </Link>
                      </div>
                    </div>

                    <div className='flex items-center w-fit h-fit  gap-3'>
                      <div className='flex items-center h-16 py-3 md:px-3'>
                        <IoNotificationsOutline className='text-[24px]' />
                      </div>

                      <div
                        className=' flex flex-row items-center gap-3 cursor-pointer border border-gray-800 border-opacity-5 rounded-full px-1 py-1'
                        onClick={OpenNav}>
                        <div className='hidden md:block md:pl-2'>
                          <IoIosArrowDown className='' />
                        </div>

                        <div className='relative inline-block w-9 h-9'>
                          <img
                            className='inline-block size-[46px] h-full w-full rounded-full'
                            src={user.userdp}
                            alt='Image Description'
                          />
                          <span className='absolute top-0 end-0 block size-3 rounded-full ring-2 ring-white bg-teal-400' />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {nav && user && (
                  <div className='absolute right-0 z-24 py-2 mt-2 overflow-hidden bg-gray-50 rounded-md shadow-xl w-72 dark:bg-gray-800'>
                    <Link href={`/app/user/${user._id}`}>
                      <div className='flex items-center p-3 -mt-2 text-sm text-gray-800 transition-colors duration-200 transform dark:text-gray-300 dark:hover:text-white'>
                        <Image
                          className='object-cover w-8 h-8 mx-2 rounded-full'
                          src={user.userdp}
                          alt='Avatar'
                          height={200}
                          width={200}
                        />
                        <div className='mx-1'>
                          <h1 className='text-sm font-semibold text-gray-700 dark:text-gray-200'>
                            {user.fullname}
                          </h1>
                          <p className='text-xs text-gray-500 dark:text-gray-400'>
                            {user.username}
                          </p>
                        </div>
                      </div>
                    </Link>

                    <hr className='border-gray-200 dark:border-gray-700' />
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16Z'></path>
                      </svg>
                      view profile
                    </a>
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z' />
                      </svg>
                      Activity Log
                    </a>
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M2 11.9998C2 11.1353 2.1097 10.2964 2.31595 9.49631C3.40622 9.55283 4.48848 9.01015 5.0718 7.99982C5.65467 6.99025 5.58406 5.78271 4.99121 4.86701C6.18354 3.69529 7.66832 2.82022 9.32603 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.3317 2.82022 17.8165 3.69529 19.0088 4.86701C18.4159 5.78271 18.3453 6.99025 18.9282 7.99982C19.5115 9.01015 20.5938 9.55283 21.6841 9.49631C21.8903 10.2964 22 11.1353 22 11.9998C22 12.8643 21.8903 13.7032 21.6841 14.5033C20.5938 14.4468 19.5115 14.9895 18.9282 15.9998C18.3453 17.0094 18.4159 18.2169 19.0088 19.1326C17.8165 20.3043 16.3317 21.1794 14.674 21.6383C14.1778 20.6658 13.1667 19.9998 12 19.9998C10.8333 19.9998 9.8222 20.6658 9.32603 21.6383C7.66832 21.1794 6.18354 20.3043 4.99121 19.1326C5.58406 18.2169 5.65467 17.0094 5.0718 15.9998C4.48848 14.9895 3.40622 14.4468 2.31595 14.5033C2.1097 13.7032 2 12.8643 2 11.9998ZM6.80385 14.9998C7.43395 16.0912 7.61458 17.3459 7.36818 18.5236C7.77597 18.8138 8.21005 19.0652 8.66489 19.2741C9.56176 18.4712 10.7392 17.9998 12 17.9998C13.2608 17.9998 14.4382 18.4712 15.3351 19.2741C15.7899 19.0652 16.224 18.8138 16.6318 18.5236C16.3854 17.3459 16.566 16.0912 17.1962 14.9998C17.8262 13.9085 18.8225 13.1248 19.9655 12.7493C19.9884 12.5015 20 12.2516 20 11.9998C20 11.7481 19.9884 11.4981 19.9655 11.2504C18.8225 10.8749 17.8262 10.0912 17.1962 8.99982C16.566 7.90845 16.3854 6.65378 16.6318 5.47605C16.224 5.18588 15.7899 4.93447 15.3351 4.72552C14.4382 5.52844 13.2608 5.99982 12 5.99982C10.7392 5.99982 9.56176 5.52844 8.66489 4.72552C8.21005 4.93447 7.77597 5.18588 7.36818 5.47605C7.61458 6.65378 7.43395 7.90845 6.80385 8.99982C6.17376 10.0912 5.17754 10.8749 4.03451 11.2504C4.01157 11.4981 4 11.7481 4 11.9998C4 12.2516 4.01157 12.5015 4.03451 12.7493C5.17754 13.1248 6.17376 13.9085 6.80385 14.9998ZM12 14.9998C10.3431 14.9998 9 13.6567 9 11.9998C9 10.343 10.3431 8.99982 12 8.99982C13.6569 8.99982 15 10.343 15 11.9998C15 13.6567 13.6569 14.9998 12 14.9998ZM12 12.9998C12.5523 12.9998 13 12.5521 13 11.9998C13 11.4475 12.5523 10.9998 12 10.9998C11.4477 10.9998 11 11.4475 11 11.9998C11 12.5521 11.4477 12.9998 12 12.9998Z'></path>
                      </svg>
                      Settings
                    </a>
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13Z' />
                      </svg>
                      Integrations
                    </a>
                    <hr className='border-gray-200 dark:border-gray-700' />
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z' />
                      </svg>
                      Guide
                    </a>
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z' />
                      </svg>
                      Help Center
                    </a>
                    <hr className='border-gray-200 dark:border-gray-700' />
                    <a
                      href='#'
                      className='flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
                      <svg
                        className='w-5 h-5 mr-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z' />
                      </svg>
                      Log out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarV2;
