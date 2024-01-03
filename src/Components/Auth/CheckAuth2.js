"use client";

import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const CheckAuth = (Component) => {
  return function NotAuth(params) {
    const user = useSelector((state) => state.userauth.user);
    const Params = useSearchParams();
    const reset = Params.get("reset");
    
    if (!reset || reset === "true") {
      redirect("/signin");
    } else {
    }

    return <Component {...params} />;
  };
};

export default CheckAuth;
