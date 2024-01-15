"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Navbar from "@/Components/Navbar/Navbar";
import Dashboard from "@/Components/Home/Dashboard";
import PostHome from "@/Components/Post/PostHome";
import Footer from "@/Components/Footer/Footer";
import BottomNav from "@/Components/BottomNavigation/BottomNav";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const isAuthenticated = useSelector(
    (state) => state.userauth.isAuthenticated
  );
  const loading = useSelector((state) => state.userauth.loading);
  const error = useSelector((state) => state.userauth.error);

  useEffect(() => {
    dispatch({ type: "userauth/getUserInformation" });
  }, [dispatch]);

  return (
    <main className="h-screen bg-white md:h-auto">
      <Navbar />
      <Dashboard />
      <PostHome />
      <Footer />
      <BottomNav />
    </main>
  );
}
