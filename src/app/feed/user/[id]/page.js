"use client";

import Link from "next/link";
import React from "react";
import { IoMdShareAlt } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import ShareProfileModal from "@/Components/Modal/ShareProfileModal";
import Image from "next/image";
import SharePostModal from "@/Components/Modal/SharePostModal";

const Page = () => {
  const user = useSelector((state) => state.userauth.user);
  const isAuthenticated = useSelector(
    (state) => state.userauth.isAuthenticated
  );

  const [blognav, setBlogNav] = useState(false);
  const [userdata, setUserData] = useState(null);
  const [userpost, setUserPost] = useState(null);
  const [follower, setFollower] = useState(null);
  const [following, setFollowing] = useState(null);
  const [shareModal, setShareModal] = useState(false);
  const [linkToShare, setLinkToShare] = useState(null);

  const router = useRouter();

  const socket = io.connect(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

  const loading = useSelector((state) => state.userauth.loading);
  const error = useSelector((state) => state.userauth.error);

  const params = useParams();
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  useEffect(() => {
    dispatch({ type: "userauth/getUserInformation" });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}auth/user/${params.id}`
        );

        if (response.status === 200) {
          const userdetails = response.data.olduser;

          const postdata = response.data.userblog;

          setUserData(userdetails);

          setUserPost(postdata);

          console.log("this is", postdata);
        } else {
          router.back();
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    socket.on("profileconnect", ({ userData, profileData }) => {
      setUserData(profileData);
      dispatch();
      console.log("new data: ", data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const PostNav = () => {
    setBlogNav(!blognav);
  };

  const userConnect = () => {
    let profileid = params.id;

    let userid = String(user._id);

    let connectData = {

      profileid,
      userid,

    };

    socket.emit("userconnect", connectData);
  };

  const handleOfflineItemClick = () => {
    router.push("/signin");
  };

  const openModal = ({ _id: id }) => {
    setLinkToShare(`${process.env.NEXT_PUBLIC_CLIENT_URL}/app/user/${id}`);
    setBlogNav(false);
    setShareModal(true);
    document.body.style.overflow = "hidden";
  };

  // Function to close the modal
  const closeModal = () => {
    setShareModal(false);
    document.body.style.overflow = "auto"; // Show the scrollbar
  };

  return (
    <div>
      <div className="flex flex-col gap-5 px-2 py-2 bg-gray-200 md:py-10 md:bg-white section1 md:px-5 lg:px-14">
        {userdata && (
          <div className="flex flex-col">
            <div className="px-4 py-8 bg-white border shadow pyborder-white md:p-4 rounded-2xl">
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-start">
                <div className="w-auto">
                  <div className="relative h-[160px] w-[160px] mb-3 sm:mb-0 w-[160px] md:h-[140px] md:w-[140px]">
                    <Image
                      src={userdata.userdp}
                      alt="aji"
                      className="object-cover h-[160px] w-[160px] md:h-[140px] md:w-[140px] border-4 border-gray-50 rounded-full"
                      height={200}
                      width={200}
                    />

                    <span className="absolute w-4 h-4 bg-green-400 border-2 border-white rounded-full bottom-2 right-6 md:right-6 dark:border-gray-800"></span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:flex md:items-start md:justify-start">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center w-full gap-1 text-lg font-bold leading-none text-gray-900">
                          {userdata.fullname}
                         {userdata.verified === true ? ( <RiVerifiedBadgeFill className="text-blue-400" />) : <></>}
                        </div>
                        <div className="flex-auto my-1 text-gray-700">
                          <span className="mr-3 ">@{userdata.username}</span>
                          {/* <span className="mr-3 border-r border-gray-600 max-h-0" />
                            <span>Cochin, IND</span> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-auto my-1 text-gray-700 items-center text-center md:text-start md:items-start w-[90%] md:lg:w-[80%] lg:w-[60%]">
                    <span className="mr-3 font-semibold ">Bio</span>
                    <span className="mr-3 border-r border-gray-600 max-h-0 " />
                    <span className="items-center text-sm text-gray-900 md:items-start">
                      {userdata.userbio}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center gap-4 pt-2 text-sm text-gray-900 md:flex-row md:justify-start md:gap-10">
                    <div className="flex flex-row items-center gap-4">
                      <div className="flex flex-row items-center cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <p className="">
                          {userdata.followers.length} Followers
                        </p>
                      </div>
                      <div className="inline-flex items-center flex-1 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <p className="">
                          {userdata.followers.length} Following
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      {user && (
                        <div
                          className="inline-flex items-center flex-1 cursor-pointer"
                          onClick={() => {
                            let id = user._id;
                            openModal(id);
                          }}
                        >
                          <div className="p-2 mr-2 bg-gray-200 rounded-full">
                            <IoMdShareAlt className="w-5 h-5 " />
                          </div>
                          <p className="">Share</p>
                        </div>
                      )}
                      {!user && (
                        <div
                          className="inline-flex items-center flex-1 cursor-pointer"
                          onClick={() => {
                            let id = userdata._id;
                            openModal(id);
                          }}
                        >
                          <div className="p-2 mr-2 bg-gray-200 rounded-full">
                            <IoMdShareAlt className="w-5 h-5 " />
                          </div>
                          <p className="">Share</p>
                        </div>
                      )}

                      <a
                        href="https://www.behance.net/ajeeshmon"
                        target="_blank"
                        className="px-5 py-2 ml-4 text-xs font-medium tracking-wider text-white transition duration-300 ease-in bg-[#FF3131] border-2 border-[#FF3131] rounded-full shadow-sm flex-no-shrink hover:bg-[#FF3131] hover:shadow-lg hover:border-[#FF3131]"
                      >
                        Edit Profile
                      </a>
                      <Link href="/app/settings">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*-stats*/}
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 sm:col-span-4">
            <div className="relative p-4 bg-white border border-white shadow rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute text-green-400 h-14 w-14 bottom-4 right-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <div className="flex items-center justify-between "></div>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-800">
                20
              </div>
              <div className="text-sm text-gray-800">Post Items</div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4">
            <div className="relative p-4 bg-white border border-white shadow rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute text-blue-500 h-14 w-14 bottom-4 right-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <div className="flex items-center justify-between ">
                <i className="text-xl text-gray-400 fab fa-behance" />
              </div>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-700">
                99
              </div>
              <div className="text-sm text-gray-800">Podi Items</div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4">
            <div className="relative p-4 bg-white border border-white shadow rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute text-yellow-300 h-14 w-14 bottom-4 right-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex items-center justify-between ">
                <i className="text-xl text-gray-400 fab fa-codepen" />
              </div>
              <div className="mt-5 text-2xl font-medium leading-8 text-gray-700">
                50
              </div>
              <div className="text-sm text-gray-800">Saved Items</div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-full"></div>
      </div>
      {shareModal && (
        <SharePostModal closeModal={closeModal} linkToShare={linkToShare} />
      )}
    </div>
  );
};

export default Page;
