"use client";

import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CheckAuth = (Component) => {
  return function NotAuth(params) {
   

    const user = useSelector((state) => state.userauth.user);

    const token = Cookies.get("authtoken")

    if (token) {
      redirect("/");
    }


    return <Component {...params} />;
  };
};

export default CheckAuth;
