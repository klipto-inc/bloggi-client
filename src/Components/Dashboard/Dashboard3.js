"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ScrollCarousel from "scroll-carousel-react";

function Dashboard3() {
  const authors = [
    {
      id: 1,
      name: "Emeka Nobis",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHJRhLL4k9Nrg/profile-displayphoto-shrink_800_800/0/1664982785615?e=2147483647&v=beta&t=w3QPUqTpo0rvIjOplSBnbkJGt9Hp3QIIOXC90faQIlQ",
      category: "Coach",
    },
    {
      id: 2,
      name: "John Obidi",
      image:
        "https://pbs.twimg.com/profile_images/1365069140252270592/LBIndsIw_400x400.jpg",
      category: "tech",
    },
    {
      id: 3,
      name: "Nelly Agbogu",
      image:
        "https://pbs.twimg.com/profile_images/1631722238532624385/r9iTWnxK_400x400.jpg",
      category: "Business",
    },
    {
      id: 4,
      name: "Chioma Ifeanyi Eze",
      image:
        "https://i0.wp.com/www.tonyelumelufoundation.org/wp-content/uploads/2020/08/Odulana-1.png?fit=2160%2C2160&ssl=1",
      category: "Speaker",
    },
    {
      id: 5,
      name: "Chinaza Favour",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFXehXfxhnODw/profile-displayphoto-shrink_800_800/0/1698244162016?e=2147483647&v=beta&t=kv4yRCqLuxa3CsLVwdxAovnunFXBg14SZwAwwe-CXBk",
      category: "writer",
    },
    {
      id: 6,
      name: "Nnamdi Ibe",
      image:
        "https://s3.amazonaws.com/cco-avatars/b253d79d-a8f0-48c2-8d34-cdb27849ecad.png",
      category: "Structure",
    },
    {
      id: 7,
      name: "Chioma Nnanna",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHdgjwng3rPxg/profile-displayphoto-shrink_800_800/0/1682267525623?e=2147483647&v=beta&t=mpR2ooa89LYwHS4NFHn4dyJm5PHMU5R1f4Svwzbq2yQ",
      category: "Speaker",
    },
  ];

  return (
    <>
      <div className="flex flex-row items-center w-[100%] gap-4 py-10 px-2 md:p-5 lg:p-5 bg-white mb-3">
        <ScrollCarousel
          autoplay
          autoplaySpeed={1}
          speed={1}
          onReady={() => console.log("I am ready")}
          style={{ width: "100%" }}
        >
          {authors &&
            authors.map((author) => (
              <>
                <div
                  className="p-2 bg-gray-900 border-gray-900 shadow-md min-w-[28vw] lg:max-w-[10vw] xl:max-w-[40vw] h-fit hover:shadow-lg rounded-2xl"
                  key={author.id}
                >
                  <div className="flex md:min-w-[40vw] lg:min-w-[10vw] items-center h-fit">
                    <div className="h-28 w-28 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-32 xl:w-32 flex items-center">
                      <Image
                        src={author.image}
                        alt="unsplash images"
                        height={500}
                        width={500}
                        className="object-cover h-28 w-28 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-32 xl:w-32 rounded-2xl"
                      />
                    </div>
                    <div className="flex-auto ml-3 md:ml-3 lg:ml-4 justify-between min-w-[10vw]">
                      <div className="flex flex-col">
                        <div className="flex items-center mr-auto text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-1 text-yellow-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <p className="font-normal text-gray-500">Top Voice</p>
                        </div>
                        <div className="flex items-center justify-between min-w-0">
                          <h2 className="mr-auto text-sm md:text-base font-medium text-gray-100 truncate">
                            {author.name}
                          </h2>
                        </div>
                        <p className="flex items-center text-[12px] md:text-sm text-gray-400">
                          {author.category}
                          <span className="relative inline-flex ml-2 rounded-md shadow-sm">
                            <span className="absolute top-0 right-0 flex w-2 h-2 -mt-1 -mr-1">
                              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                              <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full" />
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="flex my-3 border-t border-gray-800 w-full" />
                      <div className="flex space-x-3 text-sm font-medium w-full">
                        <div className="flex items-center flex-auto space-x-3 text-xs text-gray-500">
                          <span>Earned</span>
                        </div>
                        <button
                          className="px-5 py-2 text-xs font-medium tracking-wider text-white transition duration-300 ease-in bg-green-400 border-2 border-green-300 rounded-full shadow-sm md:mb-0 hover:bg-green-500 hover:shadow-lg hover:border-green-500"
                          type="button"
                          aria-label="like"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </ScrollCarousel>
      </div>
    </>
  );
}

export default Dashboard3;
