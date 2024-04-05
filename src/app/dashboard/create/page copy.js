"use client";

import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import Cookies from "js-cookie";
import ReactiveButton from "reactive-button";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import BottomNav from "@/Components/BottomNavigation/BottomNav";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import dynamic from "next/dynamic";
import CheckAuthIn from "@/Components/Auth/CheckAuthIn";
import Swal from "sweetalert2";


function Page() {
  const router = useRouter();
  const token = Cookies.get("authtoken");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const isAuthenticated = useSelector(
    (state) => state.authslice.isAuthenticated
  );

  const [state, setState] = useState("idle");
  const authToken = useSelector((state) => state.authslice.authToken);

  const [title, setTitle] = useState(null);
  const [shortdescription, setShortDescription] = useState(null);
  const [longdescription, setLongDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedphoto, setSelectedPhoto] = useState(null);
  const [blogimage, setBlogImage] = useState(null);

  const handleChange = (html) => {
    setLongDescription(html);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setBlogImage(selectedFile);

    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedPhoto(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortdescription", shortdescription);
    formData.append("longdescription", longdescription);
    formData.append("category", category);
    formData.append("blogimage", blogimage);

    try {
      setState("loading");
      

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/blog/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${String(token)}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setState("success");

        Swal.fire({
          title: "Your post is Live",
          text: "We are incredibly proud of you for sharing your post. Your voice matters!",
          icon: "success",
        });

        // Wait for the navigation to complete before logging
        router.push(`/${response.data.blogData._id}`);
        console.log(response.data); // Corrected from `console.log(post.data);`
      } else {
        setState("error");

        // More detailed error handling based on response status
        if (response.status === 401) {
          // Handle unauthorized access
        } else {
          // Handle other errors
        }

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setState("error");
    }
  };


  return (
    <div className="h-screen bg-white md:h-auto">
      <div className="px-4 py-16 mx-auto bg-gray-50 sm:px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-semibold text-center text-black">
            Tell your story
          </h1>
          <p className="mt-5 text-sm font-medium text-center text-gray-700">
            Capture your thoughts, stories, and ideas in a post
          </p>
          <form
            className="px-2 py-6 mt-6 mb-6 space-y-4 rounded-lg shadow-lg md:p-6 sm:p-8 lg:p-8"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                type="text"
                value={title}
                className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm"
                placeholder="Blog Title"
                onChange={(e) => setTitle(e.target.value)}
                required
                min={74}
              />
            </div>
            <div>
              <label htmlFor="shortDescription" className="sr-only">
                Short Description
              </label>
              <input
                type="text"
                value={shortdescription}
                className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm"
                placeholder="Short Description"
                required
                min={92}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </div>
            <div className="w-full">
              <fieldset className="w-full border border-gray-300 rounded-lg">
                <select
                  name="blog-category"
                  className="block w-full px-3 py-4 text-base text-gray-700 border-gray-300 rounded-md shadow-sm"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="uncategorized">Uncategorized</option>
                  <option value="technology">Technology</option>
                  <option value="travel">Travel</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="food-cuisine">Food & Cuisine</option>
                  <option value="health-wellness">Health & Wellness</option>
                  <option value="fashion">Fashion</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="personal-development">
                    Personal Development
                  </option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="sports">Sports</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                  <option value="arts-culture">Arts & Culture</option>
                  <option value="environment">Environment</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="politics">Politics</option>
                  <option value="science">Science</option>
                  <option value="food-drink">Food & Drink</option>
                  <option value="music">Music</option>
                  <option value="technology-gadgets">Technology Gadgets</option>
                  <option value="history">History</option>
                  <option value="travel-guides">Travel Guides</option>
                  <option value="family-parenting">Family & Parenting</option>
                  <option value="career">Career</option>
                  <option value="philosophy">Philosophy</option>
                  <option value="religion-spirituality">
                    Religion & Spirituality
                  </option>
                </select>
              </fieldset>
            </div>

            <div className="w-full mx-auto">
              <label
                htmlFor="blogimage"
                className="block mb-1 text-base font-medium text-gray-700"
              >
                Upload post image
              </label>
              <input
                id="blogimage"
                name="blogimage"
                onChange={handleImageChange}
                type="file"
                required
                className="block w-full mt-2 text-base file:mr-4 file:rounded-md file:border-0 file:bg-black file:py-2 file:px-4 file:text-lg file:font-semibold file:text-white hover:file:bg-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                accept="image/*"
              />
              {/* <p className='mt-1 text-xs text-gray-700' id='file_input_help'>
                SVG, PNG, JPG, or GIF (Max. 800x400px).
              </p> */}
            </div>

            {selectedphoto && (
              <div className="">
                <Image
                  className="w-fill h-[50vh] object-cover rounded-lg"
                  src={selectedphoto}
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            )}

            <div className="my-10 h-[50vh] pb-16 pt-6">
              <label
                htmlFor="longDescription"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Post Content
              </label>

              <ReactQuill
                theme="snow"
                className="w-full h-full rounded-lg text-"
                value={longdescription}
                style={{ fontSize: "15px" }}
                onChange={handleChange}
                required
              />
            </div>
            <ReactiveButton
              buttonState={state}
              idleText="Publish"
              loadingText="Loading"
              successText="Created successfully"
              errorText="Unable to Create"
              color="red"
              width="100%"
              size="medium"
              type="submit"
              style={{
                display: "block",
                borderRadius: "0.5rem",
                backgroundColor: "#FF3131",
                padding: "0.75rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "white",
                marginTop: "20px",
              }}
            />
          </form>
        </div>
      </div>
      {/* <Footer /> */}
      <BottomNav />
    </div>
  );
}

// const CheckAuthInCreate = CheckAuthIn(Page);

export default Page;
