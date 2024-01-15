"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { TbLock } from "react-icons/tb";
import axios from "axios";
import logo from "../../app/Resources/Images/Bloggilight.png";
import logo2 from "../../app/Resources/Images/bloggilogo.png";
import ReactiveButton from "reactive-button";
import { useRouter, useSearchParams } from "next/navigation";
import CheckAuth2 from "@/Components/Auth/CheckAuth2";
import { Spinner } from "@material-tailwind/react";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [randomImageUrl, setRandomImageUrl] = useState("");
  const [state, setState] = useState("idle");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const router = useRouter();

  const urlParams = useSearchParams();
  const reset = urlParams.get("reset");

  const PasswordUpdate = async (e) => {
    e.preventDefault();

    try {
      setState("loading");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}auth/account/updatepassword`,
        {
          reset,
          password,
          confirmPassword,
        }
      );

      if (response.status === 200) {
        setSuccess(response.data.message);
        setState("success");
        router.push("/signin");
      } else {
        setState("error");
      }
    } catch (error) {
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
              onSubmit={PasswordUpdate}
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
                  Great Job!👏
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-7">
                  You are one step ahead to having your account back.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
                  <TbLock className="text-[22px] text-gray-400" />
                  {showPassword ? (
                    <input
                      className="w-full pl-2 border-none outline-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="New Password"
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
                      placeholder="New Password"
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

                <div className="flex items-center px-3 py-2 border-2 rounded-2xl ">
                  <TbLock className="text-[22px] text-gray-400" />
                  {showPassword ? (
                    <input
                      className="w-full pl-2 border-none outline-none"
                      type="text"
                      name=""
                      id=""
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required={true}
                    />
                  ) : (
                    <input
                      className="w-full pl-2 border-none outline-none"
                      type="password"
                      name=""
                      id=""
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
              </div>

              <div className="flex items-start w-full my-6 ml-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required={true}
                  />
                </div>
                <div className="w-full ml-3 text-sm">
                  <label
                    for="terms"
                    className="flex flex-row text-sm font-light text-gray-500"
                  >
                    By checking this box, you agree to our{" "}
                    <a
                      className="ml-1 text-sm font-normal underline text-primary-600 dark:text-primary-500"
                      href="#"
                    >
                      Terms
                    </a>{" "}
                  </label>
                </div>
              </div>

              <div className="my-6">
                <ReactiveButton
                  buttonState={state}
                  idleText="UpdatePassword"
                  errorText={error}
                  successText={success}
                  loadingText={
                    <span className="flex flex-row gap-3 items-center justify-center">
                      <Spinner className="text-white w-4 h-4 border-gray-200" />{" "}
                      Loading...
                    </span>
                  }
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
            <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-90" />
            <div className="absolute border-4 border-t-8 border-opacity-50 rounded-full -bottom-40 -left-20 w-80 h-80" />
            <div className="absolute border-4 border-t-8 border-opacity-50 rounded-full -top-40 -right-0 w-80 h-80" />
            <div className="absolute border-4 border-t-8 border-opacity-50 rounded-full -top-20 -right-20 w-80 h-80" />
          </div>
        </div>
      )}
    </div>
  );
};

const newAuthcheck = CheckAuth2(Page);

export default newAuthcheck;
