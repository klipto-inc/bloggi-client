import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="left-0 z-10 flex flex-col h-full text-white transition-all duration-300 bg-indigo-600 border-none rounded w-14 hover:w-64 md:w-64 sidebar">
          <div className="flex flex-col justify-between flex-grow overflow-x-hidden overflow-y-auto">
            <ul className="flex flex-col py-4 space-y-1">
              <li>
                <div className="relative flex flex-row items-center pr-6 h-11 focus:outline-none text-white-600 hover:text-white-800">
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
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
                  </span>
                  <span className="text-sm tracking-wide truncate">
                    <input
                      type="text"
                      name="Search"
                      className="w-full py-2 text-sm text-white placeholder-gray-100 bg-indigo-600 border-transparent focus:border-transparent focus:ring-0"
                      placeholder="Search"
                    />
                  </span>
                </div>
              </li>
              <li className="hidden px-5 md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-200 uppercase">
                    Menu
                  </div>
                </div>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 bg-indigo-800 rounded-lg active h-11 focus:outline-none hover:bg-indigo-500 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-11 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    <span className="mr-16">Inbox</span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-indigo-50 rounded-full">
                      New
                    </span>
                  </span>
                </a>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-11 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    <span className="mr-4">Notifications</span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide truncate text-yellow-500 bg-green-50 rounded-full">
                      2k
                    </span>
                  </span>
                </a>
              </li>
              <li className="hidden px-5 md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-200 uppercase">
                    Task
                  </div>
                </div>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-11 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Post
                  </span>
                </a>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-11 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Schedules
                  </span>
                </a>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-11 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Income
                  </span>
                </a>
              </li>
              <li className="hidden px-5 md:block">
                <div className="flex flex-row items-center h-8 mt-5">
                  <div className="text-sm font-light tracking-wide text-gray-200 uppercase">
                    PROFILE
                  </div>
                </div>
              </li>
              <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-14 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="flex-1 ml-2 text-sm tracking-wide truncate ">
                    <div className="font-semibold text-white">Alexander</div>
                    <div className="text-sm text-white">Administrator</div>
                  </span>
                </a>
              </li>
              {/* <li className="md:px-4">
                <a
                  href="#"
                  className="relative flex flex-row items-center pr-6 rounded-lg h-11 focus:outline-none hover:bg-indigo-800 text-white-600 hover:text-white-800"
                >
                  <span className="inline-flex items-center justify-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        {/* dark theme */}
        <div className="container m-4">
          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 mx-auto">
            {/* alert */}
            <div className="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
              <div className="flex items-center text-gray-400 ">
                <img
                  className="w-6 mr-2"
                  src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg"
                  alt="taiwind css"
                />
                <p>
                  {" "}
                  A free repository for community components at{" "}
                  <a
                    href="https://tailwindcomponents.com/u/aji"
                    className="ml-1 text-green-300 underline hover:underline-none"
                    target="_blank"
                  >
                    tailwindcomponets
                  </a>
                </p>
                <button
                  type="button"
                  className="ml-auto text-xs font-medium tracking-wider text-gray-400 transition duration-300 ease-in hover:text-green-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* profile card */}
           
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/*confirm modal*/}
              <div className="relative flex flex-col items-center justify-center p-4 bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                <div className="">
                  <div className="justify-center flex-auto p-5 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex items-center w-4 h-4 mx-auto -m-1 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex items-center w-16 h-16 mx-auto text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="py-4 text-xl font-bold text-gray-200">
                      Are you sure?
                    </h2>
                    <p className="px-8 text-sm text-gray-500">
                      Do you really want to delete your account? This process
                      cannot be undone
                    </p>
                  </div>
                  <div className="p-3 mt-2 space-x-4 text-center md:block">
                    <button className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-gray-300 transition duration-300 ease-in bg-gray-700 border-2 border-gray-600 rounded-full shadow-sm md:mb-0 hover:border-gray-700 hover:shadow-lg hover:bg-gray-800">
                      Cancel
                    </button>
                    <button className="px-5 py-2 ml-4 text-sm font-medium tracking-wider text-white transition duration-300 ease-in bg-green-400 border-2 border-green-300 rounded-full shadow-sm hover:bg-green-500 hover:shadow-lg hover:border-green-500">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
              {/*elements*/}
              <div className="flex flex-col space-y-4">
                {/* elements 1 */}
                <div className="flex flex-col p-4 transition duration-500 ease-in transform bg-gray-800 border-gray-800 shadow-md cursor-pointer hover:shodow-lg rounded-2xl hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className="relative object-cover w-12 h-12 rounded-2xl"
                        />
                        <span className="absolute inline-flex w-12 h-12 border-2 border-green-400 opacity-75 animate-ping rounded-2xl" />
                        <span />
                      </div>
                      <div className="flex flex-col ml-3">
                        <div className="font-medium leading-none text-gray-100">
                          Aji
                        </div>
                        <p className="mt-1 text-sm leading-none text-gray-500">
                          UI/UX Designer
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="mr-2 text-xs font-medium tracking-wider text-gray-400 transition duration-300 ease-in flex-no-shrink hover:text-green-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      hrf="#"
                      className="ml-2 text-xs font-medium tracking-wider text-gray-400 transition duration-300 ease-in flex-no-shrink hover:text-green-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                {/*elements 2*/}
                <div className="flex flex-col p-4 transition duration-500 ease-in transform bg-gray-800 border-gray-800 shadow-md cursor-pointer hover:shodow-lg rounded-2xl hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className="relative object-cover w-12 h-12 p-1 rounded-2xl"
                        />
                        <span className="absolute inline-flex w-12 h-12 border-2 border-green-400 opacity-75 rounded-2xl" />
                        <span />
                      </div>
                      <div className="flex flex-col min-w-0 ml-3">
                        <div className="font-medium leading-none text-gray-100">
                          Groupname
                        </div>
                        <p className="mt-1 text-sm leading-none text-gray-500 truncate">
                          Beautiful hand-crafted SVG icons
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0 ml-3">
                      <span className="mb-1 text-xs text-right text-gray-500">
                        9:02pm
                      </span>
                      <div className="flex">
                        <a className="mr-2 text-xs font-medium tracking-wider text-gray-400 transition duration-300 ease-in flex-no-shrink hover:text-green-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <span className="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-bold leading-none text-green-100 bg-green-400 rounded-full">
                          99
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*elements 2*/}
                <div className="flex flex-col p-4 transition duration-500 ease-in transform bg-gray-800 border-gray-800 shadow-md cursor-pointer hover:shodow-lg rounded-2xl hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className="relative object-cover w-12 h-12 p-1 rounded-2xl"
                        />
                        <span className="absolute inline-flex w-12 h-12 border-2 border-gray-600 opacity-75 rounded-2xl" />
                        <span />
                      </div>
                      <div className="flex flex-col min-w-0 ml-3">
                        <div className="font-medium leading-none text-gray-100">
                          Ajimon
                        </div>
                        <p className="mt-1 text-sm leading-none text-gray-500 truncate">
                          Jul 066, 2021, 8.25 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0 ml-3">
                      <div className="flex">
                        <h5 className="flex items-center mr-2 font-medium text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>{" "}
                          1800
                        </h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 ml-2 text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 text-gray-400 transition duration-500 ease-in transform bg-gray-800 border border-gray-800 shadow-md cursor-pointer hover:text-green-500 hover:shodow-lg rounded-2xl hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="flex -space-x-5 ">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className="relative object-cover w-12 h-12 p-1 bg-gray-800 border-2 border-gray-600 rounded-2xl"
                        />
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className="relative object-cover w-12 h-12 p-1 bg-gray-800 border-2 border-gray-600 shadow rounded-2xl"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 ml-3">
                        <div className="font-medium leading-none text-gray-100">
                          Pending Request{" "}
                        </div>
                        <p className="mt-1 text-sm leading-none text-gray-500 truncate">
                          Jul 066, 2021, 8.25 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0 ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="font-medium leading-none text-gray-100">
                        Delete Your Acccount?
                      </div>
                      <p className="mt-1 text-sm leading-none text-gray-500">
                        By deleting your account.
                      </p>
                    </div>
                  </div>
                  <a className="text-xs font-medium tracking-wider text-gray-400 transition duration-300 ease-in flex-no-shrink hover:text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex">
                  <img
                    src="https://images.unsplash.com/photo-1575390730294-dfc5efa5250b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    alt="Just a flower"
                    className="w-16 h-16 object-fit rounded-2xl"
                  />
                  <div className="flex flex-col justify-center w-full px-2 py-1">
                    <div className="flex items-center justify-between ">
                      <div className="flex flex-col">
                        <h2 className="font-medium leading-none text-gray-100">
                          Massive Dynamic
                        </h2>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400 cursor-pointer hover:text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-2 text-sm text-gray-500">
                      <div className="flex items-center mr-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-1 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p className="font-normal">4.5</p>
                      </div>
                      <div className="flex items-center font-medium text-gray-300 ">
                        $1800
                        <span className="text-sm font-normal text-gray-600">
                          {" "}
                          /wk
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
