"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ScrollCarousel from "scroll-carousel-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TopVoice() {
  const authors = [
    {
      id: 1,
      name: "Peter Raymond",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Coach",
    },
    {
      id: 2,
      name: "John Hillary",
      image:
        "https://images.unsplash.com/photo-1645736594095-b9a4cabc1a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80",
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
      name: "Chioma Ifeanyi e.",
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

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <Carousel responsive={responsive} itemClass="carousel-item" className="z-0">
        {authors &&
          authors.map((author) => (
            <>
              <div
                className="p-2 bg-gray-900 border-gray-900 rounded-lg shadow-md carousel-item w-fit h-fit hover:shadow-lg"
                key={author.id}
              >
                <div className="flex items-center w-fit h-fit">
                  <div className="flex items-center w-24 h-24 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-28 xl:w-28">
                    <Image
                      src={author.image}
                      alt="unsplash images"
                      height={500}
                      width={500}
                      className="object-cover w-24 h-24 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-28 xl:w-28 rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto ml-1 md:ml-3 lg:ml-4 justify-between min-w-[10vw] mr-2">
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
                        <p className="font-normal text-gray-500 text-[12px]">
                          Top Voice
                        </p>
                      </div>
                      <div className="flex items-center justify-between min-w-0">
                        <h2 className="mr-auto text-sm font-medium text-gray-100 truncate md:text-sm">
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
                    <div className="flex w-full my-1 border-t border-gray-800" />
                    <div className="flex w-full space-x-3 text-sm font-medium">
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
      </Carousel>
      ;
    </>
  );
}

export default TopVoice;
