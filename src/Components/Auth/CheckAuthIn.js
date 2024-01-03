"use client";

import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CheckAuthIn = (Component) => {
  return function NotAuth(params) {
   

    const user = useSelector((state) => state.userauth.user);

    if (!user) {
      redirect("/signin");
    }

    return <Component {...params} />;
  };
};

export default CheckAuthIn;
