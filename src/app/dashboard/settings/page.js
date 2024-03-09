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
      text: "your account will be deactivated after this!",
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
      <div className="h-full md:h-fit md:w-[80%] lg:shadow-md lg:px-10 lg:ml-10 mt-8 rounded-md mb-10">
        <div className="px-4 md:px-8 lg:px-0">
          <div className="py-4 mx-5 my-4 border-b border-b-gray-100 lg:mx-5">
            <p className="text-lg font-bold leading-none text-gray-800">
              General Settings
            </p>
          </div>

          <div className="flex flex-col gap-4 pb-4 mt-8 border-b">
            <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-lg font-medium leading-none text-gray-800">
                  Add members
                </p>
                <p className="text-xs text-gray-500">
                  Invite someone to Bloggi, using your profile link.
                </p>
              </div>
            </Link>
            <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-lg font-medium leading-none text-gray-800">
                  Account settings
                </p>
                <p className="text-xs text-gray-500">
                  Usage, billing, branding, teams
                </p>
              </div>
            </Link>
            <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-lg font-medium leading-none text-gray-800">
                  Personal settings
                </p>
                <p className="text-xs text-gray-500">
                  Email, profile, notifications
                </p>
              </div>
            </Link>
            <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-600">
                <TbSwitch3 className="w-5 h-5" />
              </div>
              <div className="pl-3">
                <p className="text-lg font-medium leading-none text-gray-800">
                  Switch to Creator
                </p>
                <p className="text-xs text-gray-500">Google, slack, mail</p>
              </div>
            </Link>

            <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-600">
                <FcCancel className="w-5 h-5 " />
              </div>
              <div className="pl-3">
                <p className="text-lg font-medium leading-none text-gray-800">
                  Cancel Subscription
                </p>
                <p className="text-xs text-gray-500">
                  premium features will be deleted after this.
                </p>
              </div>
            </Link>
            <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-lg font-medium leading-none text-gray-800">
                  Apps &amp; integrations
                </p>
                <p className="text-xs text-gray-500">Google, slack, mail</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3 pb-32 mt-5">
            <Link
              href="/settings"
              className="flex px-4 py-2 pb-4 hover:bg-gray-100"
            >
              <p className="text-sm font-medium leading-none text-gray-800">
                Product updates
              </p>
            </Link>
            <Link
              href="/settings"
              className="flex px-4 py-2 pb-4 hover:bg-gray-100"
            >
              <p className="text-sm font-medium leading-none text-gray-800">
                Status updates
              </p>
            </Link>
            <Link
              href="settings"
              className="flex px-4 py-2 pb-4 hover:bg-gray-100"
            >
              <p className="text-sm font-medium leading-none text-gray-800">
                Support FAQ
              </p>
            </Link>

            <div className="flex flex-col gap-2">
              <hr className="border-gray-200" />

              <span
                href="settings"
                className="flex px-4 py-2 pb-4 hover:bg-gray-100"
                onClick={SignOutAccount}
              >
                <span className="text-sm font-medium leading-none text-gray-800 cursor-pointer">
                  Logout
                </span>
              </span>

              <hr className="border-gray-200" />

              <span
                href="settings"
                className="flex px-4 py-2 pb-4 hover:bg-gray-100"
                onClick={DeleteAccount}
              >
                <span className="text-sm font-medium leading-none text-gray-800 cursor-pointer">
                  Deactivate Account
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
       
        {/* <Footer /> */}
      </div>
      <BottomNav />
    </main>
  );
}

// export default CheckAuthIn(Settings);
export default Settings;
