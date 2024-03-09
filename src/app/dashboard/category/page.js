'use client';

import BottomNav from '@/Components/BottomNavigation/BottomNav';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import NavbarV2 from '@/Components/Navbar/NavbarV2';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    // <main className="bg-white md:h-auto">
    //   <div className="flex-col items-end justify-start w-full h-full gap-6 px-2 my-10 lg:flex md:px-10">

    //   </div>

    // </main>

    <div className=''>
      <div className='container mx-auto px-2 py-6 md:p-4 md:py-10 lg:py-20 lg:px-8  h-auto'>
        <div className='grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {/* Item 1 */}
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <div className='flex-1 md:w-1/2 lg:w-full'>
              <h2 className='text-lg font-semibold tracking-wide text-gray-800 uppercase'>
                Technology
              </h2>
              <div className='flex flex-col space-y-2'>
                <Link href='/app/category/technology'>Technology</Link>
                <Link href='/app/category/ai'>Artificial Intelligence</Link>
                <Link href='/app/category/blockchain'>Blockchain</Link>
                <Link href='/app/category/cybersecurity'>Cybersecurity</Link>
                <Link href='/app/category/machine-learning'>
                  Machine Learning
                </Link>
                <Link href='/app/category/web-development'>
                  Web Development
                </Link>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <div className='flex-1 md:w-1/2 lg:w-full'>
              <h2 className='text-lg font-semibold tracking-wide text-gray-800 uppercase'>
                Travel
              </h2>
              <div className='flex flex-col space-y-2'>
                <Link href='/app/category/travel'>Travel</Link>
                <Link href='/app/category/adventure-destinations'>
                  Adventure Destinations
                </Link>
                <Link href='/app/category/cultural-experiences'>
                  Cultural Experiences
                </Link>
                <Link href='/app/category/travel-tips'>Travel Tips</Link>
                <Link href='/app/category/food-cuisine'>Food & Cuisine</Link>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <div className='flex-1 md:w-1/2 lg:w-full'>
              <h2 className='text-lg font-semibold tracking-wide text-gray-800 uppercase'>
                Lifestyle
              </h2>
              <div className='flex flex-col space-y-2'>
                <Link href='/app/category/health-wellness'>
                  Health & Wellness
                </Link>
                <Link href='/app/category/fitness'>Fitness</Link>
                <Link href='/app/category/fashion'>Fashion</Link>
                <Link href='/app/category/entertainment'>Entertainment</Link>
              </div>
            </div>
          </div>

          {/* Item 4 (Visible on md and lg screens) */}
          <div className='p-4 bg-white rounded-lg shadow-md md:col-span-2 lg:col-span-1'>
            <div className='flex-1 md:w-1/2 lg:w-full'>
              <h2 className='text-lg font-semibold tracking-wide text-gray-800 uppercase'>
                More Categories
              </h2>
              <div className='flex flex-col space-y-2'>
                <Link href='/app/category/agriculture'>Agriculture</Link>
                <Link href='/app/category/politics'>Politics</Link>
                <Link href='/app/category/business'>Business</Link>
                <Link href='/app/category/education'>Education</Link>
                <Link href='/app/category/health'>Health</Link>
                <Link href='/app/category/finance'>Finance</Link>
                <Link href='/app/category/environment'>Environment</Link>
                <Link href='/app/category/sports'>Sports</Link>
                <Link href='/app/category/marketing'>Marketing</Link>
                <Link href='/app/category/arts-culture'>Arts & Culture</Link>
                <Link href='/app/category/science'>Science</Link>
              </div>
            </div>
          </div>

          <div className='p-4 bg-white rounded-lg shadow-md md:col-span-2 lg:col-span-1'>
            <div className='flex-1 md:w-1/2 lg:w-full'>
              <h2 className='text-lg font-semibold tracking-wide text-gray-800 uppercase'>
                Others Categories
              </h2>
              <div className='flex flex-col space-y-2'>
                <Link href='/app/category/food-drink'>Food & Drink</Link>
                <Link href='/app/category/music'>Music</Link>
                <Link href='/app/category/technology-gadgets'>
                  Technology Gadgets
                </Link>
                <Link href='/app/category/history'>History</Link>
                <Link href='/app/category/travel-guides'>Travel Guides</Link>
                <Link href='/app/category/family-parenting'>
                  Family & Parenting
                </Link>
                <Link href='/app/category/career'>Career</Link>
                <Link href='/app/category/philosophy'>Philosophy</Link>
                <Link href='/app/category/religion-spirituality'>
                  Religion & Spirituality
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <BottomNav />
    </div>
  );
}
