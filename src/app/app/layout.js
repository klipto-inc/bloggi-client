"use client";
import React from "react";
import NavbarV2 from "@/Components/Navbar/NavbarV2";
import logo from "../../app//Resources/Images/bloggilogo.png";
import SideBarComponent from "@/Components/Sidebar/SideBarComponent";
import Dashboard3 from "@/Components/Dashboard/Dashboard3";
import PostHome2 from "@/Components/Post/PostHome2";
import BottomNav from "@/Components/BottomNavigation/BottomNav";


function Layout({ children }) {
  return (
    <div>
      <main className="flex flex-row w-screen h-screen overflow-hidden">
        <SideBarComponent />
        <div className="w-[100%]  flex flex-col overflow-y-auto">
          <NavbarV2 />
          {children}
        </div>
        <BottomNav />
      </main>
    </div>
  );
}


export default Layout;
