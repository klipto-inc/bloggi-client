"use client";

import BottomNav from "@/Components/BottomNavigation/BottomNav";
import Navbar from "@/Components/Navbar/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { TbSwitch3 } from "react-icons/tb";
import { Button } from "@material-tailwind/react";
import Footer from "@/Components/Footer/Footer";
import { FcCancel } from "react-icons/fc";
import CheckAuthIn from "@/Components/Auth/CheckAuthIn";

function Settings() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const token = Cookies.get("authtoken");

  useEffect(() => {
    dispatch({ type: "userauth/getUserInformation" });
  }, [dispatch]);

  const DeleteAccount = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "your account will be deleted after this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, SignOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = axios.delete(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/account`,
            {
              headers: {
                Authorization: `Bearer ${String(token)}`,
              },
            }
          );

          if (response.status !== 200) {
            console.log("opps something went wrong, try again");
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          }

          Cookies.remove("authtoken");
          if (typeof window !== "undefined") {
            window.location.reload();
          }

          Swal.fire({
            title: "We hate to see you go!",
            text: "Your account has been deleted",
            icon: "success",
          });
        } catch (error) {}
      }
    });
  };

  const SignOutAccount = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "you will be logged out after this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, SignOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = axios.delete(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/account/signout`,
            {
              headers: {
                Authorization: `Bearer ${String(token)}`,
              },
            }
          );

          if (response.status !== 200) {
            console.log("opps something went wrong, try again");
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          }

          Cookies.remove("authtoken");
          if (typeof window !== "undefined") {
            window.location.reload();
          }

          Swal.fire({
            title: "We hate to see you go!",
            text: "You've been Signed Out of Bloggi",
            icon: "success",
          });
        } catch (error) {}
      }
    });
  };

  return (
    <main className="bg-white h-s">
      <div className="h-full md:h-fit md:w-[80%] lg:shadow-md lg:px-10 lg:ml-10 mt-8 rounded-md mb-20 pb-8">
        <div className="px-4 md:px-8 lg:px-0">
        

          <div className="inline-flex items-center justify-between w-full">
            <h3 className="py-4 mx-2 my-4 text-xl font-bold text-gray-800 border-b border-gray-100 sm:text-2xl dark:text-white">
              Notifications
            </h3>
            <button className="inline-flex items-center px-2 py-2 text-xs font-medium text-[#FF3131] transition-transform duration-700 transform bg-white border rounded shadow sm:text-sm sm:px-3 focus:outline-none active:scale-75 hover:bg-[#FF3131] hover:text-white hover:-translate-y-1 hover:scale-110 dark:text-gray-800 dark:hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1 sm:mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Close
            </button>
          </div>
          <p className="mt-8 text-sm font-medium text-gray-500 sm:text-base dark:text-white">
            Today
          </p>
          <div className="w-full px-6 py-4 mt-2 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-between w-full ">
              <div className="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                  alt="Training Icon"
                  className="w-6 h-6 mr-3"
                />
                <h3 className="text-base font-bold text-gray-800">Training</h3>
              </div>
              <p className="text-xs text-gray-500">2 min ago</p>
            </div>
            <p className="mt-1 text-sm">
              Hey! Do you remember about choosing your training regime?
            </p>
          </div>
          <div className="w-full px-6 py-4 mt-2 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-between w-full ">
              <div className="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                  alt="Messages Icon"
                  className="w-6 h-6 mr-3"
                />
                <h3 className="text-base font-bold text-gray-800">Messages</h3>
              </div>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
            <p className="mt-1 text-sm">You have a new message</p>
          </div>
          <p className="mt-8 text-sm font-medium text-gray-500 dark:text-white sm:text-base">
            Yesterday
          </p>
          <div className="w-full px-6 py-4 mt-2 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-between w-full ">
              <div className="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                  alt="Form Icon"
                  className="w-6 h-6 mr-3"
                />
                <h3 className="text-base font-bold text-gray-800">Forms</h3>
              </div>
              <p className="text-xs text-gray-500">12:47</p>
            </div>
            <p className="mt-1 text-sm">
              Remember about filling out the COVID-19 from before the next
              appointment tomorrow
            </p>
          </div>
          <div className="w-full px-6 py-4 mt-2 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-between w-full ">
              <div className="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                  alt="Training Icon"
                  className="w-6 h-6 mr-3"
                />
                <h3 className="text-base font-bold text-gray-800">Training</h3>
              </div>
              <p className="text-xs text-gray-500">12:43</p>
            </div>
            <p className="mt-1 text-sm">
              We are glad you have decided to use our training system! Let us
              now set a complete of things
            </p>
          </div>
          <button className="inline-flex items-center justify-center w-full px-4 py-2 mt-12 text-sm font-medium text-red-500 transition-transform duration-700 transform bg-white border rounded shadow focus:outline-none active:scale-50 hover:bg-red-500 hover:text-white hover:-translate-y-1 hover:scale-90 dark:hover:bg-white dark:text-gray-800 dark:hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 sm:mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Clear all notifications
          </button>
        </div>
      </div>

      {/* <div className="hidden md:block">
       
        <Footer />
      </div> */}
      <BottomNav />
    </main>
  );
}

// export default CheckAuthIn(Settings);
export default Settings;
