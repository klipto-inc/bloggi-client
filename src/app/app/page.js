"use client";

import NavbarV2 from "@/Components/Navbar/NavbarV2";
import React from "react";
import logo from "../../app//Resources/Images/bloggilogo.png";
import SideBarComponent from "@/Components/Sidebar/SideBarComponent";
import Dashboard3 from "@/Components/Dashboard/Dashboard3";
import PostHome2 from "@/Components/Post/PostHome2";

const page = () => {
  return (
    <div className="bg-gray-300 md:bg-transparent">
      <Dashboard3 />

      <div className="grid grid-cols-4 gap-5 lg:gap-5 md:grid-cols-6 lg:grid-cols-12 px-0 md:px-5 justify-between">
        <div className="col-span-4 lg:col-span-7">
          <PostHome2 />
        </div>
        <div className="col-span-4 lg:col-span-4 md:col-span-6 w-full md:w-fit lg:w-full justify-self-end">
          <div className="max-w-sm mx-auto border border-gray-200 rounded bg-white">
            <div className="flex flex-row items-end justify-end py-4 px-3">
              <p className="text-gray-800 items-end">Suggested accounts</p>
            </div>
            <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
              <div className="flex items-center">
                <img
                  className="rounded-full h-10 w-10"
                  src="https://loremflickr.com/g/600/600/girl"
                />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">
                    Jane doe
                  </div>
                  <div className="leading-snug text-xs text-gray-600">
                    @jane
                  </div>
                </div>
              </div>
              <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
                Follow
              </button>
            </div>
            <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
              <div className="flex items-center">
                <img
                  className="rounded-full h-10 w-10"
                  src="https://loremflickr.com/g/600/600/boy"
                />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">
                    john doe
                  </div>
                  <div className="leading-snug text-xs text-gray-600">
                    @john
                  </div>
                </div>
              </div>
              <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
                Follow
              </button>
            </div>
            <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
              <div className="flex items-center">
                <img
                  className="rounded-full h-10 w-10"
                  src="https://loremflickr.com/g/600/600/paris"
                />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">
                    Paris
                  </div>
                  <div className="leading-snug text-xs text-gray-600">
                    @paris
                  </div>
                </div>
              </div>
              <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
                Follow
              </button>
            </div>
            <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
              <div className="flex items-center">
                <img
                  className="rounded-full h-10 w-10"
                  src="https://loremflickr.com/g/600/600/paris"
                />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">
                    Paris
                  </div>
                  <div className="leading-snug text-xs text-gray-600">
                    @paris
                  </div>
                </div>
              </div>
              <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
                Follow
              </button>
            </div>
            <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
              <div className="flex items-center">
                <img
                  className="rounded-full h-10 w-10"
                  src="https://loremflickr.com/g/600/600/paris"
                />
                <div className="ml-2 flex flex-col">
                  <div className="leading-snug text-sm text-gray-900 font-bold">
                    Paris
                  </div>
                  <div className="leading-snug text-xs text-gray-600">
                    @paris
                  </div>
                </div>
              </div>
              <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
                Follow
              </button>
            </div>
            <div className="flex flex-row items-end justify-end py-2 px-3">
              <p className="text-gray-800 items-end">see more</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-7">
          <PostHome2 />
        </div>
      </div>
    </div>
  );
};

export default page;
