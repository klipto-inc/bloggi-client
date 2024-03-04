'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Dashboard3 from './TopVoice';
import { useRouter, redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { io } from 'socket.io-client';
import axios from 'axios';
import Link from 'next/link';
import parse from 'html-react-parser';
import Tooltip from '@mui/material/Tooltip';
import { FaHandsClapping } from 'react-icons/fa6';
import GenShare from '../Modal/GenShare';
import { IoMdSend } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import { AiOutlineComment } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const PostHome2 = () => {
  const [blogs, setBlogs] = useState(null);
  const [loads, setLoads] = useState(true);
  const [allClap, setAllClap] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [linkToShare, setLinkToShare] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [clickedPost, setClickedPost] = useState(null);

  const router = useRouter();

  const handleReadMore = (postId) => {
    // You can replace '/posts/[postId]' with the actual path to your post detail page
    router.push(`/app/${postId}`);
  };

  const dispatch = useDispatch();
  const token = Cookies.get('authtoken');

  const user = useSelector((state) => state.userauth.user);
  const isAuthenticated = useSelector(
    (state) => state.userauth.isAuthenticated
  );
  const loading = useSelector((state) => state.userauth.loading);
  const error = useSelector((state) => state.userauth.error);

  const fetchRef = useRef(null);

  useEffect(() => {
    // Create a socket connection
    const socket = io.connect(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

    // Handle the socket connection events
    socket.on('connect', () => {
      setSocketConnected(true);
    });

    socket.on('alllike', (data) => {
      setAllClap(data);
      console.log('This is data from alllike event:', allClap);
    });

    socket.on('error', (error) => {
      console.error('Socket.IO connection error:', error);
      // Handle the error (e.g., set an error state, show a message)
    });

    // Disconnect the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log('response');
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}blog`
        );
        if (response.data && response.data.allblog) {
          setBlogs(response.data.allblog);
          setAllClap(response.data.allblog.like);
          setLoads(false);
          console.log('This is the fetched data:', response.data.allblog);
        } else {
          setLoads(false);
          console.log('No blog posts found');
        }
      } catch (error) {
        console.error(error);
        setLoads(false);
      }
    };

    fetchData();
  }, []);

  const postlike = 'w-4 h-4 mr-1 text-blue-500 text-[14px]';
  const postunlike = 'w-4 h-4 mr-1 text-[14px]';
  const checkpost = !user ? postlike : postunlike;

  const postReaction = (id) => {
    const userid = String(user._id);
    const blogid = id;

    console.log('Like: Blog ID', blogid, 'User ID', userid);

    const likeData = {
      blogid,
      userid,
    };

    // Emit the "postreact" event to the server
    socket.emit('postreact', likeData);
  };

  const openShareModal = (id) => {
    console.log('this is ', id);
    setLinkToShare(`${process.env.NEXT_PUBLIC_CLIENT_URL}/${id}`);
    setClickedPost(id);
    setOpenShare(!openShare);
  };

  return (
    <div className='flex flex-col gap-5 md:mx-5'>
      {blogs &&
        blogs.map((post) => (
          <>
            <article className='' key={post._id}>
              <div className='bg-white rounded-lg shadow'>
                <div className='relative flex flex-row px-2  py-3 md:mx-2'>
                  <Link href={`/app/user/${post.author._id}`}>
                    <div className='w-auto h-auto border-2 border-gray-500 rounded-full'>
                      <img
                        className='object-cover w-10 h-10 rounded-full shadow cursor-pointer'
                        alt='User avatar'
                        src={post.author.userdp}
                      />
                    </div>
                  </Link>
                  <div className='flex flex-col mt-1 mb-2 ml-4'>
                    <div className='text-xl font-medium flex flex-row items-center gap-1'>
                      {post.author.fullname}
                      {/* {post.verified === true ? (
                        <MdVerified className='text-blue-600 text-[16px]' />
                      ) : (
                        <></>
                      )} */}
                    </div>
                  </div>

                  <div className='absolute top-3 right-2 text-[23px] text-gray-700 w-fit'>
                    <div placement='relative'>
                      <div>
                        <HiOutlineDotsVertical
                          className='text-gray-900 cursor-pointer'
                          // onClick={PostNav}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-b border-gray-100' />
                <div className='text-lg font-medium flex flex-row items-center gap-1 px-2 my-2 mx-3'>
                  {post.title}
                </div>

                <div className='mb-3 px-2 flex flex-col gap-2'>
                  <div className=' mx-3 text-[16px] overflow-hidden line-clamp-4 text-gray-700'>
                    {parse(post.longdescription)}
                  </div>
                  <span
                    className='text-blue-500 cursor-pointer text-[15px] pl-3'
                    onClick={() => handleReadMore(post._id)}>
                    {' '}
                    read more
                  </span>
                </div>
                <div className='flex justify-start mb-4 border-t border-gray-100'>
                  <div className='flex w-full pt-2 pl-5 mt-1'>
                    <span className='inline-block w-10 h-10 p-2 mr-2 text-center text-gray-400 transition duration-300 ease-out bg-white border border-gray-300 rounded-full cursor-pointer hover:text-red-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        width='22'
                        height='22'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                        />
                      </svg>
                    </span>

                    <Image
                      alt='img'
                      height={200}
                      width={200}
                      className='inline-block object-cover w-10 h-10 text-white border-2 border-white rounded-full shadow-sm cursor-pointer'
                      src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    />
                    <Image
                      alt='img'
                      height={200}
                      width={200}
                      className='inline-block object-cover w-10 h-10 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer'
                      src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    />
                    <Image
                      alt='img'
                      height={200}
                      width={200}
                      className='inline-block object-cover w-10 h-10 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                    />
                    {/* <Image
                      alt='img'
                      height={200}
                      width={200}
                      className='inline-block object-cover w-10 h-10 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer'
                      src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
                    /> */}
                  </div>
                  <div className='flex justify-end w-full pt-2 pr-5 mt-1 relative'>
                    {/* <span
                      className='inline-block w-10 h-10 p-2 mr-2 text-center text-blue-400 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50'
                      onClick={() => {
                        let id = post._id;
                        openShareModal(id);
                      }}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='mt-0.5'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                        />
                      </svg>
                    </span> */}
                    <span className='inline-block w-10 h-10 p-2 mr-2 text-center text-gray-800 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50'>
                      <AiOutlineComment className='w-6 h-6' />
                    </span>
                    <span className='inline-block w-10 h-10 p-2 mr-2 text-center text-gray-800 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50'>
                      <BsEyeFill className='w-6 h-6' />
                    </span>
                    <span className='inline-block w-10 h-10 p-2 text-center text-gray-100 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50'>
                      <svg
                        className='w-6 h-6 text-red-500'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'
                        />
                      </svg>
                    </span>

                    {clickedPost === post._id && openShare && (
                      <GenShare linkToShare={linkToShare} />
                    )}
                  </div>
                </div>
                <div className='flex w-full border-t border-gray-100'>
                  <div className='flex flex-row mx-5 mt-3 text-xs'>
                    <Tooltip
                      title={`${post.comment.length} Comments`}
                      placement='top'
                      arrow>
                      <div className='flex items-center text-base mb-2 mr-4 font-normal text-gray-700 rounded-md'>
                        Saved:
                        <div className='ml-1 text-gray-400 text-ms'>
                          {' '}
                          {post.comment.length}
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <div className='flex justify-end w-full mx-1 mt-3 text-xs'>
                    <Tooltip
                      title={`${post.view} Comment`}
                      placement='top'
                      arrow>
                      <div className='flex items-center text-base mb-2 mr-4 font-normal text-gray-700 rounded-md'>
                        Comment:{' '}
                        <div className='ml-1 text-gray-400 text-ms'>
                          {' '}
                          {post.view}
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip title={`${post.view} Views`} placement='top' arrow>
                      <div className='flex items-center text-base mb-2 mr-4 font-normal text-gray-700 rounded-md'>
                        Views:{' '}
                        <div className='ml-1 text-gray-400 text-ms'>
                          {' '}
                          {post.view}
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      title={`${post.like.length} Like`}
                      placement='top'
                      arrow>
                      <div className='flex items-center mb-2 text-base mr-4 text-gray-700 rounded-md'>
                        Like:{' '}
                        <div className='ml-1 text-gray-400 '>
                          {' '}
                          {post.like.length}
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <div className='mx-0 text-sm font-medium text-gray-400 md:mx-3 pb-5'>
                  <Image
                    alt='img'
                    height={500}
                    width={500}
                    className='w-full rounded h-[55vh] object-cover'
                    src={post.blogimage}
                  />
                </div>

                {/* <div className='relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400'>
                  {user && (
                    <Image
                      alt='img'
                      height={200}
                      width={200}
                      className='object-cover w-10 h-10 mr-2 rounded-full shadow cursor-pointer'
                      src={user.userdp}
                    />
                  )}
                  <span className='absolute inset-y-0 right-0 flex items-center pr-6'>
                    <button
                      type='submit'
                      className='p-1 focus:outline-none focus:shadow-none hover:text-blue-500'>
                      <IoMdSend className='text-xl text-[#FF3131]' />
                    </button>
                  </span>
                  <input
                    type='search'
                    className='w-full py-2 pl-4 pr-10 text-sm placeholder-gray-400 bg-gray-100 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-gray-200 focus:text-gray-900 focus:shadow-outline-blue'
                    style={{ borderRadius: 25 }}
                    placeholder='Post a comment...'
                    autoComplete='off'
                  />
                </div> */}
              </div>
            </article>
          </>
        ))}
    </div>
  );
};

export default PostHome2;
