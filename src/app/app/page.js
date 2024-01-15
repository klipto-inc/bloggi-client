"use client";

import NavbarV2 from "@/Components/Navbar/NavbarV2";
import React from "react";
import logo from "../../app//Resources/Images/bloggilogo.png";
import SideBarComponent from "@/Components/Sidebar/SideBarComponent";
import Dashboard from "@/Components/Home/Dashboard";
import PostHome2 from "@/Components/Home/PostHome2";
import SuggestedUsers from "@/Components/Home/SuggestedUsers";

const page = () => {
  return (
    <div className="bg-gray-200 md:bg-white md:bg-transparent">
      <Dashboard />

      <div className="grid justify-between grid-cols-4 gap-5 px-0 py-2 mx-0 mt-4 lg:gap-5 md:grid-cols-6 lg:grid-cols-12 md:px-5">
        <div className="col-span-4 lg:col-span-7">
          <PostHome2 />
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default page;
