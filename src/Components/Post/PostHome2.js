import Image from "next/image";
import React from "react";

const PostHome2 = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <article className="">
        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto border-2 border-green-500 rounded-full">
              <img
                className="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />
            </div>
            <div className="flex flex-col mt-1 mb-2 ml-4">
              <div className="text-sm font-semibold text-gray-600">
                Sara Lauren
              </div>
              <div className="flex w-full mt-1">
                <div className="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                  UX Design
                </div>
                <div className="text-xs font-thin text-gray-400">
                  • 1 day ago
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-100" />
          <div className="px-2 mx-3 mb-2 font-semibold text-gray-600">
            Dummy text of the printing and typesetting industry
          </div>
          <div className="px-2 mx-3 mb-6 text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{`'`}s standard dummy
            text ever since the 1500
          </div>
          <div className="flex justify-start mb-4 border-t border-gray-100">
            <div className="flex w-full pt-2 pl-5 mt-1">
              <span className="w-8 h-8 px-2 pt-2 mr-2 text-center text-gray-400 transition duration-300 ease-out bg-white border rounded-full cursor-pointer hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="14px"
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
              </span>
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              />
            </div>
            <div className="flex justify-end w-full pt-2 pr-5 mt-1">
              <span className="w-8 h-8 px-2 py-2 mr-2 text-center text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="14px"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </span>
              <span className="h-8 px-2 py-2 text-center text-gray-100 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex w-full border-t border-gray-100">
            <div className="flex flex-row mx-5 mt-3 text-xs">
              <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                Comments:
                <div className="ml-1 text-gray-400 text-ms"> 30</div>
              </div>
              <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
              </div>
            </div>
            <div className="flex justify-end w-full mx-5 mt-3 text-xs">
              <div className="flex items-center mb-2 mr-4 text-gray-700 rounded-md">
                Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div>
              </div>
            </div>
          </div>
          <div className=" mx-3  text-sm font-medium text-gray-400 ">
            <Image
              alt="img"
              height={200}
              width={200}
              className="w-full rounded h-[45vh] md:h-0"
              src="https://picsum.photos/536/354"
            />
          </div>

          <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <Image
              alt="img"
              height={200}
              width={200}
              className="object-cover w-10 h-10 mr-2 rounded-full shadow cursor-pointer"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 text-gray-400 transition duration-300 ease-out hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              className="w-full py-2 pl-4 pr-10 text-sm placeholder-gray-400 bg-gray-100 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style={{ borderRadius: 25 }}
              placeholder="Post a comment..."
              autoComplete="off"
            />
          </div>
        </div>
      </article>

      <article className="">
        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto border-2 border-green-500 rounded-full">
              <img
                className="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />
            </div>
            <div className="flex flex-col mt-1 mb-2 ml-4">
              <div className="text-sm font-semibold text-gray-600">
                Sara Lauren
              </div>
              <div className="flex w-full mt-1">
                <div className="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                  UX Design
                </div>
                <div className="text-xs font-thin text-gray-400">
                  • 1 day ago
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-100" />
          <div className="px-2 mx-3 mb-2 font-semibold text-gray-600">
            Dummy text of the printing and typesetting industry
          </div>
          <div className="px-2 mx-3 mb-6 text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{`'`}s standard dummy
            text ever since the 1500
          </div>
          <div className="flex justify-start mb-4 border-t border-gray-100">
            <div className="flex w-full pt-2 pl-5 mt-1">
              <span className="w-8 h-8 px-2 pt-2 mr-2 text-center text-gray-400 transition duration-300 ease-out bg-white border rounded-full cursor-pointer hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="14px"
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
              </span>
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              />
            </div>
            <div className="flex justify-end w-full pt-2 pr-5 mt-1">
              <span className="w-8 h-8 px-2 py-2 mr-2 text-center text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="14px"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </span>
              <span className="h-8 px-2 py-2 text-center text-gray-100 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex w-full border-t border-gray-100">
            <div className="flex flex-row mx-5 mt-3 text-xs">
              <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                Comments:
                <div className="ml-1 text-gray-400 text-ms"> 30</div>
              </div>
              <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
              </div>
            </div>
            <div className="flex justify-end w-full mx-5 mt-3 text-xs">
              <div className="flex items-center mb-2 mr-4 text-gray-700 rounded-md">
                Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <Image
              alt="img"
              height={200}
              width={200}
              className="object-cover w-10 h-10 mr-2 rounded-full shadow cursor-pointer"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 text-gray-400 transition duration-300 ease-out hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              className="w-full py-2 pl-4 pr-10 text-sm placeholder-gray-400 bg-gray-100 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style={{ borderRadius: 25 }}
              placeholder="Post a comment..."
              autoComplete="off"
            />
          </div>
        </div>
      </article>

      <article className="">
        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto border-2 border-green-500 rounded-full">
              <img
                className="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />
            </div>
            <div className="flex flex-col mt-1 mb-2 ml-4">
              <div className="text-sm font-semibold text-gray-600">
                Sara Lauren
              </div>
              <div className="flex w-full mt-1">
                <div className="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                  UX Design
                </div>
                <div className="text-xs font-thin text-gray-400">
                  • 1 day ago
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-100" />
          <div className="px-2 mx-3 mb-2 font-semibold text-gray-600">
            Dummy text of the printing and typesetting industry
          </div>
          <div className="px-2 mx-3 mb-6 text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{`'`}s standard dummy
            text ever since the 1500
          </div>
          <div className="flex justify-start mb-4 border-t border-gray-100">
            <div className="flex w-full pt-2 pl-5 mt-1">
              <span className="w-8 h-8 px-2 pt-2 mr-2 text-center text-gray-400 transition duration-300 ease-out bg-white border rounded-full cursor-pointer hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="14px"
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
              </span>
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <Image
                alt="img"
                height={200}
                width={200}
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              />
            </div>
            <div className="flex justify-end w-full pt-2 pr-5 mt-1">
              <span className="w-8 h-8 px-2 py-2 mr-2 text-center text-blue-400 transition duration-300 ease-out bg-blue-100 rounded-full cursor-pointer hover:bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="14px"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </span>
              <span className="h-8 px-2 py-2 text-center text-gray-100 transition duration-300 ease-out bg-gray-100 rounded-full cursor-pointer hover:bg-gray-50">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex w-full border-t border-gray-100">
            <div className="flex flex-row mx-5 mt-3 text-xs">
              <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                Comments:
                <div className="ml-1 text-gray-400 text-ms"> 30</div>
              </div>
              <div className="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div>
              </div>
            </div>
            <div className="flex justify-end w-full mx-5 mt-3 text-xs">
              <div className="flex items-center mb-2 mr-4 text-gray-700 rounded-md">
                Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div>
              </div>
            </div>
          </div>
          <div className=" mx-3  text-sm font-medium text-gray-400 ">
            <Image
              alt="img"
              height={200}
              width={200}
              className="w-full rounded h-[45vh] md:h-0"
              src="https://picsum.photos/536/354"
            />
          </div>

          <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <Image
              alt="img"
              height={200}
              width={200}
              className="object-cover w-10 h-10 mr-2 rounded-full shadow cursor-pointer"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 text-gray-400 transition duration-300 ease-out hover:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              className="w-full py-2 pl-4 pr-10 text-sm placeholder-gray-400 bg-gray-100 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style={{ borderRadius: 25 }}
              placeholder="Post a comment..."
              autoComplete="off"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostHome2;
