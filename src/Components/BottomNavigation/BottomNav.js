"use client";

import React from "react";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const BottomNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const pathName = usePathname();

  return (
    <section className="fixed inset-x-0 bottom-0 z-50 block text-gray-800 bg-gray-300 border-t-2 shadow-lg dark:bg-dark backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 dark:text-gray-400 border-royal/20 md:hidden">
      <div id="tabs" className="flex justify-between">
        <Link
          href="/"
          className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white ${
            pathName === "/" ? "text-[#FF3131]  bg-white" : "text-[#000]"
          }`}
        >
          <MdOutlineExplore className="inline-block w-6 h-6 mb-1" />
          <span className="block text-xs text-black tab">Feed</span>
        </Link>
        <Link
          href="/category"
          className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white ${
            pathName === "/category" ? "text-[#FF3131] bg-white" : "text-[#000]"
          }`}
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
          <span className="block text-xs text-black tab">Categories</span>
        </Link>
        <Link
          href={user ? "/create" : "/signin"}
          className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white ${
            pathName === "/create" ? "text-[#FF3131] bg-white" : "text-[#000]"
          }`}
        >
          <IoCreateOutline className="inline-block w-6 h-6 mb-1" />
          <span className="block text-xs text-black tab">Create</span>
        </Link>

        {user && (
          <Link
            href={user ? `/user/${user._id}` : "/signin"}
            className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white ${
              pathName === `/user${user._id}`
                ? "text-[#FF3131] bg-white"
                : "text-[#000]"
            }`}
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

            <span className="block text-xs text-black tab">Profile</span>
          </Link>
        )}

        <Link
          href="/settings"
          className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white ${
            pathName === "/settings" ? "text-[#FF3131] bg-white" : "text-[#000]"
          }`}
        >
          <IoSettingsOutline className="inline-block w-6 h-6 mb-1" />

          <span className="block text-xs text-black tab">Settings</span>
        </Link>
      </div>
    </section>
  );
};

export default BottomNav;
