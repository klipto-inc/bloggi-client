"use client";

import BottomNav from "@/Components/BottomNavigation/BottomNav";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Button } from "@material-tailwind/react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Page = () => {
  const [blogs, setBlogs] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("response");
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/blog`
        );
        if (response.data && response.data.allblog) {

          const filtereddata = response.data.allblog.filter((item) => item.category === id)

          console.log(filtereddata);
          setBlogs(filtereddata);
          
          // const filteredData = response.data.allblog.filter((item) => {
          //   if (item.category === id) {
          //   }
          // });
          console.log("This is the fetched data:", response.data.allblog);
        } else {
        }
      } catch (error) {
        console.error(error);
        setLoads(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="">
        <div>
          <section className="px-2 md:px-5 lg:px-10">
            <div className="ml-4 pt-8">Search result for: {id} </div>
            <div className="container px-2 py-10 pt-2 mx-auto md:px-2">
              {blogs === null ? (
                <div className="grid grid-cols-1 gap-8 mt-8 animate-pulse xl:mt-12 xl:gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>

                  <div className="hidden w-full sm:block">
                    <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>

                  <div className="hidden w-full lg:block">
                    <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
                    {blogs && blogs.map((post) => (
                      <div
                        className="relative flex w-full py-6 transition-all duration-150 md:w-full lg:w-full"
                        key={post.id}
                      >
                        <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                          <Link href={`/${post._id}`}>
                            <div className="md:flex-shrink-0 ">
                              <Image
                                src={post.blogimage}
                                alt="Blog Cover"
                                className="object-cover w-full rounded-lg rounded-b-none md:h-56"
                                width={200}
                                height={200}
                              />
                            </div>
                          </Link>
                          <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                            <span className="text-xs font-medium text-blue-600 uppercase">
                              {post.category}
                            </span>
                            <div className="flex flex-row items-center">
                              <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  ></path>
                                </svg>
                                <span>{post.view}</span>
                              </div>

                              <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                  ></path>
                                </svg>
                                <span>{post.comment.length}</span>
                              </div>

                              <div className="flex flex-row items-center text-xs font-medium text-gray-500 cursor-pointer">
                                <FaHandsClapping />
                                <span>{post.like.length}</span>
                              </div>
                            </div>
                          </div>
                          <hr className="border-gray-300" />
                          <div className="flex flex-wrap items-center flex-1 w-full px-4 py-1 text-start">
                            <Link href={`/${post._id}`}>
                              <h2 className="text-lg font-bold tracking-normal text-gray-800">
                                {post.title}
                              </h2>
                            </Link>
                          </div>
                          <hr className="border-gray-300" />
                          <Link href={`/${post._id}`}>
                            <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-lg text-justify text-gray-700">
                              {post.shortdescription}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {blogs && blogs.length <= 0 ? (
                <div className="h-[70vh] w-full bg-gray-100 flex items-center rounded-lg">
                  <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
                    <div className="max-w-md">
                      <div className="text-3xl font-bold font-dark">
                        No Post Found
                      </div>
                      <div className="flex flex-row items-center gap-3">
                        <p className="text-2xl font-light leading-normal md:text-2xl">
                          Sorry we couldnt find any post.
                        </p>
                        <DynamicFeedIcon className="text-[50px]" />
                      </div>

                      <p className="mb-8">
                        Click the button below to get started.
                      </p>

                      <Link href="/create">
                        <Button variant="gradient">Create Post</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </section>
        </div>

        <Footer />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <BottomNav />
    </main>
  );
};

export default Page;
