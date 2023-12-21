"use client";

import BottomNav from "@/Components/BottomNavigation/BottomNav";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen bg-white md:h-auto">
      <Navbar />
      <div className="flex-col items-end justify-center w-full h-full gap-6 px-2 my-10 lg:flex md:px-10">
        <div className="flex flex-row justify-between w-full">
          {/* <p className="">Top Categories</p> */}
          <div className="flex flex-row items-center justify-end w-full gap-4">
            <p className="font-medium text-gray-900 text-[15px]">
              Suggested Authors...
            </p>
            <div className="flex -space-x-4">
              <Image
                alt="Author 1"
                className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-full"
                width={40}
                height={40}
                src="https://source.unsplash.com/40x40/?portrait?1"
              />
              <Image
                alt="Author 3"
                className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-full"
                width={40}
                height={40}
                src="https://source.unsplash.com/40x40/?portrait?3"
              />
              <Image
                alt="Author 2"
                className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-full"
                width={40}
                height={40}
                src="https://source.unsplash.com/40x40/?portrait?2"
              />
              <Image
                alt="Author 3"
                className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-full"
                width={40}
                height={40}
                src="https://source.unsplash.com/40x40/?portrait?3"
              />
              <Image
                alt="Author 4"
                className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-full"
                width={40}
                height={40}
                src="https://source.unsplash.com/40x40/?portrait?4"
              />
              <span className="flex items-center justify-center w-12 h-12 text-[13px] font-semibold border rounded-full bg-[#FF3131] text-white border-gray-300 cursor-pointer">
                view
              </span>
            </div>
          </div>
        </div>

        <div className="container pb-20 mx-auto ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Item 1 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex-1 md:w-1/2 lg:w-full">
                <h2 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
                  Technology
                </h2>
                <div className="flex flex-col space-y-2">
                  <Link href="/category/technology">Technology</Link>
                  <Link href="/category/ai">Artificial Intelligence</Link>
                  <Link href="/category/blockchain">Blockchain</Link>
                  <Link href="/category/cybersecurity">Cybersecurity</Link>
                  <Link href="/category/machine-learning">
                    Machine Learning
                  </Link>
                  <Link href="/category/web-development">Web Development</Link>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex-1 md:w-1/2 lg:w-full">
                <h2 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
                  Travel
                </h2>
                <div className="flex flex-col space-y-2">
                  <Link href="/category/travel">Travel</Link>
                  <Link href="/category/adventure-destinations">
                    Adventure Destinations
                  </Link>
                  <Link href="/category/cultural-experiences">
                    Cultural Experiences
                  </Link>
                  <Link href="/category/travel-tips">Travel Tips</Link>
                  <Link href="/category/food-cuisine">Food & Cuisine</Link>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex-1 md:w-1/2 lg:w-full">
                <h2 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
                  Lifestyle
                </h2>
                <div className="flex flex-col space-y-2">
                  <Link href="/category/health-wellness">
                    Health & Wellness
                  </Link>
                  <Link href="/category/fitness">Fitness</Link>
                  <Link href="/category/fashion">Fashion</Link>
                  <Link href="/category/entertainment">Entertainment</Link>
                </div>
              </div>
            </div>

            {/* Item 4 (Visible on md and lg screens) */}
            <div className="p-4 bg-white rounded-lg shadow-md md:col-span-2 lg:col-span-1">
              <div className="flex-1 md:w-1/2 lg:w-full">
                <h2 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
                  More Categories
                </h2>
                <div className="flex flex-col space-y-2">
                  <Link href="/category/agriculture">Agriculture</Link>
                  <Link href="/category/politics">Politics</Link>
                  <Link href="/category/business">Business</Link>
                  <Link href="/category/education">Education</Link>
                  <Link href="/category/health">Health</Link>
                  <Link href="/category/finance">Finance</Link>
                  <Link href="/category/environment">Environment</Link>
                  <Link href="/category/sports">Sports</Link>
                  <Link href="/category/marketing">Marketing</Link>
                  <Link href="/category/arts-culture">Arts & Culture</Link>
                  <Link href="/category/science">Science</Link>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md md:col-span-2 lg:col-span-1">
              <div className="flex-1 md:w-1/2 lg:w-full">
                <h2 className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
                  Others Categories
                </h2>
                <div className="flex flex-col space-y-2">
                  <Link href="/category/food-drink">Food & Drink</Link>
                  <Link href="/category/music">Music</Link>
                  <Link href="/category/technology-gadgets">
                    Technology Gadgets
                  </Link>
                  <Link href="/category/history">History</Link>
                  <Link href="/category/travel-guides">Travel Guides</Link>
                  <Link href="/category/family-parenting">
                    Family & Parenting
                  </Link>
                  <Link href="/category/career">Career</Link>
                  <Link href="/category/philosophy">Philosophy</Link>
                  <Link href="/category/religion-spirituality">
                    Religion & Spirituality
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
      <BottomNav />
    </main>
  );
}
