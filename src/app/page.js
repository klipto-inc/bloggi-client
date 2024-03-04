"use client";

import Image from "next/image";
import logo from "../app/Resources/Images/bloggilogo.png";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useRouter } from "next/navigation"; // Change from "next/navigation"

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setLoading(false);
      router.push("/app"); // Use router.push instead of redirect
    }, 5000); // Adjust the duration as needed

    // Clean up the timeout on component unmount
    return () => {
      clearTimeout(splashTimeout);
    };
  }, [router]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white transition-opacity ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Customize the content of your splash screen */}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3 ">
          <Image
            src={logo}
            alt="Project Logo"
            className="max-w-[170px]"
            height={200}
            width={200}
          />
        </div>
        <PropagateLoader color="#cf2424" size={15} />
      </div>
      {/* <span className="mt-5 text-lg">Gateway to creative expression</span> */}
    </div>
  );
}
