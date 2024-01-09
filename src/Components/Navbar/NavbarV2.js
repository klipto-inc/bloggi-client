"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../app//Resources/Images/bloggilogo.png";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const NavbarV2 = () => {
  return (
    <div className="top-0 z-20 w-full md:sticky">
      <nav className="relative flex items-center justify-between w-full h-16 px-3 bg-white shadow md:px-8">
        <div className="hidden h-16 py-3 md:block lg:hidden md:px-3">
          <Link className="flex flex-row items-start" href="/">
            <Image
              className="h-[40px] w-auto object-cover "
              src={logo}
              height={200}
              width={200}
              alt=""
            />
          </Link>
        </div>
        <div className="static flex items-center h-16 py-3 md:hidden md:px-3">
          <IoNotificationsOutline className="text-[24px]" />
        </div>

        <div className="relative flex-grow-0 flex-shrink hidden md:block ">
          <input
            type="text"
            className="w-full p-3 bg-gray-100 border-0 rounded-lg bg-purple-white"
            placeholder="Search somthing..."
            style={{ minWidth: 400 }}
          />
          <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-row items-center flex-initial">
          <div className="mr-4">
            <div className="hidden sm:flex sm:gap-4 md:block">
              <Link
                className="rounded-lg bg-[#FF3131] px-5 py-2 text-sm font-medium text-white shadow"
                href="/create"
              >
                Create
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-end">
            <div className="block">
              <div className="relative inline">
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: 16,
                        width: 16,
                        stroke: "currentcolor",
                        strokeWidth: 3,
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28" />
                        <path d="m2 24h28" />
                        <path d="m2 8h28" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 block w-12 h-10 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative block">
                <button
                  type="button"
                  className="relative inline-block px-3 py-2 rounded-full hover:bg-gray-200 "
                >
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 16,
                          width: 16,
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarV2;
