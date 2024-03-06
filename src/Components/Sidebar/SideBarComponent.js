import Image from "next/image";
import Link from "next/link";
import logo from "../../app/Resources/Images/Bloggilight.png";
import { BiCategory } from "react-icons/bi";
import { FaPodcast } from "react-icons/fa6";
import { AiOutlineRead } from "react-icons/ai";
import React from "react";
import { MdOutlineExplore, MdOutlineNotificationsActive } from "react-icons/md";

const SideBarComponent = ({nav}) => {
  return (
    <div className={`sticky top-0 ${nav === true ? "block absolute" : "hidden"}  h-screen lg:block w-[25dvw]`}>
      <div className="flex flex-col items-center w-full h-full text-gray-400 bg-black px-2 md:pl-4 md:pr-8">
        <div className="flex flex-col items-start justify-center w-full h-16 px-3 py-3 border-b border-gray-900">
          <Link className="flex flex-row items-start" href="/app">
            <Image
              className="h-[40px] w-auto object-cover "
              src={logo}
              height={200}
              width={200}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between w-full h-full px-2">
          <div className="">
            <div className="flex flex-col items-center w-full mt-3 ">
              <Link
                className="flex items-center w-full h-12 px-3 mt-2 bg-gray-700 rounded hover:bg-gray-700 hover:text-gray-300"
                href="/app"
              >
                <MdOutlineExplore className="w-6 h-6 stroke-current" />
                <span className="ml-4 text-base font-medium">Feed</span>
              </Link>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                href="/app/category"
              >
                <BiCategory className="w-6 h-6 stroke-current" />
                <span className="ml-4 text-base font-medium">Categories</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                href="#"
              >
                <MdOutlineNotificationsActive className="w-6 h-6 text-gray-300 stroke-current" />
                <span className="ml-4 text-base font-medium">Notifications</span>
                <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full ml-3">
                  New
                </span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded row hover:bg-gray-700 hover:text-gray-300"
                href="#"
              >
                <AiOutlineRead className="w-6 h-6 stroke-current" />
                <span className="w-auto ml-4 text-base font-medium">Post</span>
              </a>

              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded row hover:bg-gray-700 hover:text-gray-300"
                href="#"
              >
                <FaPodcast className="w-6 h-6 stroke-current" />
                <span className="w-auto ml-4 text-base font-medium">Podi</span>
                <div className="mb-1 ml-5">
                  <div className="relative">
                    <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-green-300 rounded-full animate-ping" />
                    <div className="absolute top-0 right-0 w-3 h-3 -mt-1 -mr-1 bg-green-300 rounded-full" />
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center w-full mt-2 border-t border-gray-900 ">
              <a
                className="flex items-center w-full h-12 px-3 mt-2 text-gray-200 rounded hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-4 text-base font-medium">Insights</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                href="/app/settings"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span className="ml-4 text-base font-medium">Settings</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end h-auto gap-2 px-3 pb-3 align-baseline">
            <a
              href="/privacy"
              className="text-[14px] text-gray-500 hover:underline"
            >
              Terms & Policy
            </a>
            <a
              href="/feedback"
              className="text-[14px] text-gray-500 hover:underline"
            >
              Feedback & Suggestions
            </a>
            <a
              href="/support"
              className="text-[14px] text-gray-500 hover:underline"
            >
              Customer Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
