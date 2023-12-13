import React from "react";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const BottomNav = () => {
  return (
    <div classNameName="md:hidden">
      <section className="fixed inset-x-0 bottom-0 z-50 block text-gray-800 bg-gray-300 border-t-2 shadow-lg dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-20 dark:text-gray-400 border-royal/20">
        <div id="tabs" className="flex justify-between">
          <Link
            href="/"
            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white"
            activeClassName="dark:text-gray-100 text-black border-1 border-t-[#FF3131]"
          >
            
            <MdOutlineExplore className="inline-block w-6 h-6 mb-1" />
            <span className="block text-xs tab">Feed</span>
          </Link>
          <Link
            href="/category"
            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white"
            activeClassName="dark:text-gray-100 text-black border-1 border-t-[#FF3131]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-6 h-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="block text-xs tab">Categories</span>
          </Link>
          <Link
            href="/createpost"
            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white"
            activeClassName="dark:text-gray-100 text-black"
          >
            
            <IoCreateOutline className="inline-block w-6 h-6 mb-1"/>
            <span className="block text-xs tab">Create</span>
          </Link>
          <Link
            href="user/profile"
            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white"
            activeClassName="dark:text-gray-100 text-black border-1 border-t-[#FF3131]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-6 h-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="block text-xs tab">Profile</span>
          </Link>
          <Link
            href="/settings"
            className="justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white"
            activeClassName="dark:text-gray-100 text-black border-1 border-t-[#FF3131]"
          >
            
            <IoSettingsOutline className="inline-block w-6 h-6 mb-1" />
            
            <span className="block text-xs tab">Settings</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BottomNav;
