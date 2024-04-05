'use client';

import axios from 'axios';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter, useParams } from 'next/navigation';
import Cookies from 'js-cookie';
import ReactiveButton from 'reactive-button';
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';
import BottomNav from '@/Components/BottomNavigation/BottomNav';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import dynamic from 'next/dynamic';
import CheckAuthIn from '@/Components/Auth/CheckAuthIn';
import Swal from 'sweetalert2';
import EditorComp from '@/Components/Post/EditorComp';

function Page() {
  const router = useRouter();
  const token = Cookies.get('authtoken');
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

  const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Add your post content here!',
          level: 1,
        },
      },
    ],
  };

  const isAuthenticated = useSelector(
    (state) => state.authslice.isAuthenticated
  );

  const [state, setState] = useState('idle');
  const authToken = useSelector((state) => state.authslice.authToken);

  const [title, setTitle] = useState(null);
  const [shortdescription, setShortDescription] = useState(null);
  const [longdescription, setLongDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedphoto, setSelectedPhoto] = useState(null);
  const [blogimage, setBlogImage] = useState(null);
  const [data, setData] = useState(INITIAL_DATA);

  const handleChange = (html) => {
    setLongDescription(html);
  };

  const handleImageChange = (e) => {

    console.log("hit change");
    const selectedFile = e.target.files[0];
    setBlogImage(selectedFile);

    const imageUrl = URL.createObjectURL(selectedFile);
    setSelectedPhoto(imageUrl);

    console.log("imageUrl", imageUrl);
    console.log("setSelectedPhoto", selectedphoto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('shortdescription', shortdescription);
    formData.append('longdescription', longdescription);
    formData.append('category', category);
    formData.append('blogimage', blogimage);

    try {
      setState('loading');

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/blog/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${String(token)}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        setState('success');

        Swal.fire({
          title: 'Your post is Live',
          text: 'We are incredibly proud of you for sharing your post. Your voice matters!',
          icon: 'success',
        });

        // Wait for the navigation to complete before logging
        router.push(`/${response.data.blogData._id}`);
        console.log(response.data); // Corrected from `console.log(post.data);`
      } else {
        setState('error');

        // More detailed error handling based on response status
        if (response.status === 401) {
          // Handle unauthorized access
        } else {
          // Handle other errors
        }

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setState('error');
    }
  };

  return (
    <div className='h-screen bg-white md:h-auto'>
      <div className='px-4 py-16 mx-auto sm:px-6 w-full lg:w-[80%]'>
        <div className='mx-auto'>
          <h1 className='text-xl font-semibold text-center text-black'>
            Tell your story
          </h1>
          <p className='mt-5 text-sm font-medium text-center text-gray-700'>
            Capture your thoughts, stories, and ideas in a post
          </p>
          <form
            className='px-2 py-6 mt-6 mb-6 flex flex-col gap-6 md:p-6 sm:p-8 lg:p-8'
            onSubmit={handleSubmit}
            encType='multipart/form-data'>
            <div className='flex flex-col gap-3 lg:gap-6 lg:flex-row justify-between'>
              <div className='w-full lg:w-[70%]'>
                <p className='mt-5 text-sm font-medium text-start text-gray-700 w-full'>
                  Choose title
                </p>
                <input
                  type='text'
                  value={title}
                  className='w-full p-4 py-3 text-lg outline-gray-50 focus-none border rounded-md'
                  placeholder='Blog Title'
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  min={74}
                />
              </div>

              <div className='w-full lg:w-[30%]'>
                <p className='mt-5 text-sm font-medium text-start text-gray-700'>
                  Choose category
                </p>
                <fieldset className='w-full border rounded-md  '>
                  <select
                    name='blog-category'
                    className='block w-full px-3 py-4 text-base text-gray-700'
                    onChange={(e) => setCategory(e.target.value)}
                    required>
                    <option value='uncategorized'>Uncategorized</option>
                    <option value='technology'>Technology</option>
                    <option value='travel'>Travel</option>
                    <option value='lifestyle'>Lifestyle</option>
                    <option value='food-cuisine'>Food & Cuisine</option>
                    <option value='health-wellness'>Health & Wellness</option>
                    <option value='fashion'>Fashion</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='personal-development'>
                      Personal Development
                    </option>
                    <option value='finance'>Finance</option>
                    <option value='education'>Education</option>
                    <option value='sports'>Sports</option>
                    <option value='business'>Business</option>
                    <option value='marketing'>Marketing</option>
                    <option value='arts-culture'>Arts & Culture</option>
                    <option value='environment'>Environment</option>
                    <option value='agriculture'>Agriculture</option>
                    <option value='politics'>Politics</option>
                    <option value='science'>Science</option>
                    <option value='food-drink'>Food & Drink</option>
                    <option value='music'>Music</option>
                    <option value='technology-gadgets'>
                      Technology Gadgets
                    </option>
                    <option value='history'>History</option>
                    <option value='travel-guides'>Travel Guides</option>
                    <option value='family-parenting'>Family & Parenting</option>
                    <option value='career'>Career</option>
                    <option value='philosophy'>Philosophy</option>
                    <option value='religion-spirituality'>
                      Religion & Spirituality
                    </option>
                  </select>
                </fieldset>
              </div>
            </div>

            <div
              className='w-full relative border-2 border-gray-300 border-dashed rounded-lg p-6'
              id='dropzone'>
              <input
                type='file'
                className='absolute inset-0 w-full h-full opacity-0 z-50'
              />
              <div className='text-center'>
                <img
                  className='mx-auto h-12 w-12'
                  src='https://www.svgrepo.com/show/357902/image-upload.svg'
                  alt=''
                />
                <h3 className='mt-2 text-sm font-medium text-gray-900'>
                  <label
                    htmlFor='file-upload'
                    className='relative cursor-pointer'>
                    <span>Drag and drop</span>
                    <span className='text-indigo-600'> or browse</span>
                    <span className='ml-1'>to upload thumbnail</span>
                    <input
                      id='blogimage'
                      name='blogimage'
                      onChange={handleImageChange}
                      type='file'
                      required
                      accept='image/*'
                      className='sr-only'
                    />
                  </label>
                </h3>
                <p className='mt-1 text-xs text-gray-500'>
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
              {selectedphoto && (
                <div className=''>
                  <Image
                    className='w-full h-full object-cover rounded-lg'
                    src={selectedphoto}
                    height={500}
                    width={500}
                    alt=''
                  />
                </div>
              )}
            </div>

            <div className='w-full mt-16'>
              <EditorComp
                data={data}
                onChange={setData}
                editorblock='editorjs-container'
                className='w-full'
              />
            </div>

            <ReactiveButton
              buttonState={state}
              idleText='Publish'
              loadingText='Loading'
              successText='Created successfully'
              errorText='Unable to Create'
              color='red'
              width='100%'
              size='medium'
              type='submit'
              style={{
                display: 'block',
                borderRadius: '0.5rem',
                backgroundColor: '#FF3131',
                padding: '0.75rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'white',
                marginTop: '5px',
              }}
            />
          </form>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

// const CheckAuthInCreate = CheckAuthIn(Page);

export default Page;
