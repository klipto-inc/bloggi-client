import React from 'react'

const SuggestedUsers = () => {
  return (
    <div className="items-start justify-start w-full col-span-4 lg:col-span-4 md:col-span-6 md:w-full lg:w-full">
      <div className="">
        <div className="max-w-sm bg-white border border-gray-200 rounded">
          <div className="flex flex-row items-end justify-end px-3 py-4">
            <p className="items-end text-gray-800">Suggested accounts</p>
          </div>
          <div className="flex items-center justify-between p-3 border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://loremflickr.com/g/600/600/girl"
              />
              <div className="flex flex-col ml-2">
                <div className="text-sm font-bold leading-snug text-gray-900">
                  Jane doe
                </div>
                <div className="text-xs leading-snug text-gray-600">@jane</div>
              </div>
            </div>
            <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://loremflickr.com/g/600/600/boy"
              />
              <div className="flex flex-col ml-2">
                <div className="text-sm font-bold leading-snug text-gray-900">
                  john doe
                </div>
                <div className="text-xs leading-snug text-gray-600">@john</div>
              </div>
            </div>
            <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://loremflickr.com/g/600/600/paris"
              />
              <div className="flex flex-col ml-2">
                <div className="text-sm font-bold leading-snug text-gray-900">
                  Paris
                </div>
                <div className="text-xs leading-snug text-gray-600">@paris</div>
              </div>
            </div>
            <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://loremflickr.com/g/600/600/paris"
              />
              <div className="flex flex-col ml-2">
                <div className="text-sm font-bold leading-snug text-gray-900">
                  Paris
                </div>
                <div className="text-xs leading-snug text-gray-600">@paris</div>
              </div>
            </div>
            <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src="https://loremflickr.com/g/600/600/paris"
              />
              <div className="flex flex-col ml-2">
                <div className="text-sm font-bold leading-snug text-gray-900">
                  Paris
                </div>
                <div className="text-xs leading-snug text-gray-600">@paris</div>
              </div>
            </div>
            <button className="h-8 px-3 text-md font-bold text-[#FF3131] border border-[#FF3131] rounded-full hover:bg-white">
              Follow
            </button>
          </div>
          <div className="flex flex-row items-end justify-end px-3 py-2">
            <p className="items-end text-gray-800">see more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestedUsers