"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { TbLock } from "react-icons/tb";
import axios from "axios";
import { useSelector } from "react-redux";
import ReactiveButton from "reactive-button";
import logo from "../../app/Resources/Images/Bloggilight.png";
import logo2 from "../../app/Resources/Images/bloggilogo.png";
import Cookies from "js-cookie";
import CheckAuth from "@/Components/Auth/CheckAuth";
import { Spinner } from "@material-tailwind/react";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [randomImageUrl, setRandomImageUrl] = useState("");
  const [state, setState] = useState("idle");
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [password, setPassword] = useState();

  const isAuthenticated = useSelector(
    (state) => state.authslice.isAuthenticated
  );

  const router = useRouter();

  const UserLogin = async (e) => {
    e.preventDefault();
    setState("loading");

    console.log("data", email, password);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}auth/signin`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Login successful
        console.log("Login successful", response.data.authToken);
        const MaxAge = 30 * 24 * 60 * 60;
        Cookies.set("authtoken", response.data.authToken, { expires: MaxAge });

        // Check if the token is set
        const token = Cookies.get("authtoken");
        if (token) {
          setSuccess(response.data.message);
          setState("success");
          router.push("/");
        } else {
          // Token not set
          setError("Failed to set auth token");
          setState("error");
        }
      } else {
        // Non-200 status, handle accordingly
        setError(response.data.error || "Unexpected error occurred");
        setState("error");
      }
    } catch (error) {
      // Handle any errors during the login request
      console.error("Login failed:", error);
      setError(error.response.data.error);
      setState("error");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const imageUrl = [
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F14.svg?alt=media&token=3daabae4-53ff-48b3-87f0-7b559ed1f16b",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F15.svg?alt=media&token=95a635a5-e4cf-4667-af9d-4d19bdcba38b",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F17.svg?alt=media&token=390894f8-c0dd-4491-b4c4-59bb6e527dc1",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F2.svg?alt=media&token=094a6390-0c7a-40f0-8aa1-626f0770d4f5",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F5.svg?alt=media&token=8cf79a11-52cc-491a-ad04-12c9ff0a4a0e",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F8.svg?alt=media&token=98bdb5d8-4323-4ade-b6c3-f0e8b7f855ed",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F9.svg?alt=media&token=53d210d3-cb70-4429-8fdc-ca1f81725196",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F1.svg?alt=media&token=554ea4cd-dfe3-4cd0-a2f9-70391cda8f08",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F10.svg?alt=media&token=63074575-f16a-4b2f-88da-74551bb62586",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F12.svg?alt=media&token=282defe9-f7dd-4011-b3ae-f2ddd3aae267",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F13.svg?alt=media&token=05724b79-226e-42c8-8fe2-2fe7bb95478e",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F14.svg?alt=media&token=3daabae4-53ff-48b3-87f0-7b559ed1f16b",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F15.svg?alt=media&token=95a635a5-e4cf-4667-af9d-4d19bdcba38b",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F17.svg?alt=media&token=390894f8-c0dd-4491-b4c4-59bb6e527dc1",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F2.svg?alt=media&token=094a6390-0c7a-40f0-8aa1-626f0770d4f5",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F8.svg?alt=media&token=98bdb5d8-4323-4ade-b6c3-f0e8b7f855ed",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F9.svg?alt=media&token=53d210d3-cb70-4429-8fdc-ca1f81725196",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F11.svg?alt=media&token=d67f43c8-518b-4584-8c4b-7c2256fb1908",
    "https://firebasestorage.googleapis.com/v0/b/bloggi-51747.appspot.com/o/BloggiAuthBg%2F12.svg?alt=media&token=282defe9-f7dd-4011-b3ae-f2ddd3aae267",
  ];

  // Function to set a random image URL
  const setRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrl.length);
    setRandomImageUrl(imageUrl[randomIndex]);
  };

  // Set a random image URL on initial render
  useEffect(() => {
    setRandomImage();
  }, []);

  return (
    <div>
      {randomImageUrl && (
        <div
          className="h-[100svh] md:flex backdrop-blur-md bg-black overflow-y-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${randomImageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", // Fix: Use backgroundRepeat instead of background
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-center py-10 bg-white md:w-1/2 h-[100svh] overflow-y-hidden">
            <form
              className="bg-white px-4 w-full md:px-10 md:w-full lg:px-0 lg:w-[55%]"
              onSubmit={UserLogin}
            >
              <div className="flex items-center justify-center block w-full mb-8 md:gap-12 md:hidden">
                <Link
                  className="flex flex-row items-center justify-center gap-2 text-teal-600"
                  href="/"
                >
                  <Image
                    className="h-[55px] w-auto object-cover "
                    src={logo2}
                    height={200}
                    width={200}
                    alt=""
                  />
                </Link>
              </div>

              <div className="flex flex-col items-center justify-center header md:justify-start md:items-start">
                <h1 className="mb-1 text-2xl font-bold text-gray-800">
                  Welcome Back!👏
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-7">
                  You{`'`}ve missed out on amazing post, sign in to get started.
                </p>
              </div>

              <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 border-none outline-none"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
                <TbLock className="text-[22px] text-gray-400" />
                {showPassword ? (
                  <input
                    className="w-full pl-2 border-none outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />
                ) : (
                  <input
                    className="w-full pl-2 border-none outline-none"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />
                )}

                {showPassword ? (
                  <IoEyeOutline
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="w-5 h-5 text-gray-400 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="my-6">
                <ReactiveButton
                  buttonState={state}
                  errorText={error}
                  successText={success}
                  loadingText={
                    <span className="flex flex-row gap-3 items-center justify-center">
                      <Spinner className="text-white w-4 h-4 border-gray-200" />{" "}
                      Loading...
                    </span>
                  }
                  idleText="Log in"
                  color="red"
                  width="100%"
                  size="medium"
                  type="submit"
                  style={{
                    display: "block",
                    borderRadius: "14px",
                    backgroundColor: "#FF3131",
                    padding: "0.75rem 1.25rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "white",
                    background: "#FF3131",
                  }}
                />
              </div>

              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  New?{" "}
                  <Link
                    href="/signup"
                    className="text-base font-medium text-gray-500 underline"
                  >
                    click here
                  </Link>
                </p>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  <Link
                    href="/recovery"
                    className="ml-2 text-base font-medium text-gray-500 underline"
                  >
                    recovery?
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex">
            <div className="w-[70%]">
              <div className=" md:flex md:items-center md:gap-12">
                <Link
                  className="flex flex-row items-center gap-2 text-teal-600"
                  href="/"
                >
                  <Image
                    className="h-[55px] w-auto object-cover "
                    src={logo}
                    height={200}
                    width={200}
                    alt=""
                  />
                </Link>
              </div>
              <p className="mt-1 text-sm text-white">
                #1 Blogging platform for Creators. Join our community and
                unleash your creativity! share your experiences, and explore a
                world of limitless possibilities.
              </p>
            </div>
            <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-90 opacity-10" />
            <div className="absolute border-4 border-t-8 border-opacity-50 rounded-full -bottom-40 -left-20 w-80 h-80 opacity-10" />
            <div className="absolute border-4 border-t-8 border-opacity-50 rounded-full -top-40 -right-0 w-80 h-80 opacity-10" />
            <div className="absolute border-4 border-t-8 border-opacity-50 rounded-full -top-20 -right-20 w-80 h-80 opacity-10" />
          </div>
        </div>
      )}
    </div>
  );
};

const CheckAuthSignin = CheckAuth(Page);

export default CheckAuthSignin;
