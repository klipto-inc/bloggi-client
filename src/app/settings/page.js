'use client';

import BottomNav from "@/Components/BottomNavigation/BottomNav";
import Navbar from "@/Components/Navbar/Navbar";


export default function Page() {
 
  

  return (
    <main className='h-screen bg-white md:h-auto'>
      <Navbar />
      <div className="h-screen">

      <h1>Settings</h1>
      </div>
      <BottomNav />
    </main>
  );
}
