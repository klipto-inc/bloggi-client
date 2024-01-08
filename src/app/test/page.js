import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <h1>Profile card</h1>
        <div className="relative max-w-sm overflow-hidden bg-white border rounded-lg shadow-sm border-neutral-200/60">
          <img
            src="https://cdn.devdojo.com/images/august2023/wallpaper.jpeg"
            className="relative z-20 object-cover w-full h-32"
          />
          <div className="absolute top-0 z-50 flex items-center w-full mt-2 translate-y-24 px-7 -translate-x-0">
            <div className="w-20 h-20 p-1 bg-white rounded-full">
              <img
                src="https://cdn.devdojo.com/images/august2023/adam.jpeg"
                className="w-full h-full rounded-full"
              />
            </div>
            <a
              href="https://twitter.com/adamwathan"
              target="_blank"
              className="block mt-6 ml-2"
            >
              <h5 className="text-lg font-bold leading-none tracking-tight text-neutral-900">
                Adam Wathan
              </h5>
              <small className="block mt-1 text-sm font-medium leading-none text-neutral-500">
                @adamwathan
              </small>
            </a>
            <button className="absolute right-0 inline-flex items-center justify-center w-auto px-5 mt-6 text-sm font-medium transition-colors duration-100 rounded-full h-9 mr-7 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 bg-neutral-900 disabled:pointer-events-none hover:bg-neutral-800 text-neutral-100">
              <span>Follow</span>
            </button>
          </div>
          <div className="relative pb-6 p-7">
            <p className="mt-12 mb-6 text-neutral-500 text-">
              Creator of @tailwindcss. Listener of Slayer. Austin 3:16. BTW,
              Pines UI is super cool!
            </p>
            <div className="flex items-center justify-between pr-2 text-neutral-500">
              <div className="relative flex w-16">
                <img
                  src="https://cdn.devdojo.com/images/august2023/caleb.jpeg"
                  className="relative z-30 w-8 h-8 border-2 border-white rounded-full"
                />
                <img
                  src="https://cdn.devdojo.com/images/august2023/taylor.jpeg"
                  className="z-20 w-8 h-8 -translate-x-4 border-2 border-white rounded-full"
                />
                <img
                  src="https://cdn.devdojo.com/images/august2023/adam.jpeg"
                  className="z-10 w-8 h-8 border-2 border-white rounded-full -translate-x-7"
                />
              </div>
              <a
                href="https://twitter.com/adamwathan/following"
                target="_blank"
                className="text-sm hover:underline"
              >
                <strong className="text-neutral-800">673</strong> Following
              </a>
              <a
                href="https://twitter.com/adamwathan/followers"
                target="_blank"
                className="text-sm hover:underline"
              >
                <strong className="text-neutral-800">168.6K</strong> Followers
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <>
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    body {\n      font-family: 'Plus Jakarta Sans', sans-serif;\n    }\n\n    .toggle-checkbox:checked {\n      right: 0;\n      border-color: #131212;\n    }\n\n    .toggle-checkbox:checked+.toggle-label {\n      background-color: #131212;\n    }\n  ",
            }}
          />
          <div className="flex justify-center w-full py-12 mx-auto">
            <div className="relative inline-block">
              <button className="relative z-10 flex items-center p-2 text-sm text-gray-800 rounded-md hover:text-blue-800 dark:text-gray-100 dark:hover:text-white">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Avatar"
                />
              </button>
              {/* Dropdown menu */}
              <div className="absolute right-0 z-20 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl w-72 dark:bg-gray-800">
                <div className="flex items-center p-3 -mt-2 text-sm text-gray-800 transition-colors duration-200 transform dark:text-gray-300 dark:hover:text-white">
                  <img
                    className="object-cover w-8 h-8 mx-2 rounded-full"
                    src="https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Avatar"
                  />
                  <div className="mx-1">
                    <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Michael Ramirez
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      mramirez@mail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 dark:hover:text-white">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                    </svg>
                    Dark mode
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
                    />
                    <label
                      htmlFor="toggle"
                      className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
                    />
                  </div>
                </div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16Z"></path>
                  </svg>
                  view profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z" />
                  </svg>
                  Activity Log
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 11.9998C2 11.1353 2.1097 10.2964 2.31595 9.49631C3.40622 9.55283 4.48848 9.01015 5.0718 7.99982C5.65467 6.99025 5.58406 5.78271 4.99121 4.86701C6.18354 3.69529 7.66832 2.82022 9.32603 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.3317 2.82022 17.8165 3.69529 19.0088 4.86701C18.4159 5.78271 18.3453 6.99025 18.9282 7.99982C19.5115 9.01015 20.5938 9.55283 21.6841 9.49631C21.8903 10.2964 22 11.1353 22 11.9998C22 12.8643 21.8903 13.7032 21.6841 14.5033C20.5938 14.4468 19.5115 14.9895 18.9282 15.9998C18.3453 17.0094 18.4159 18.2169 19.0088 19.1326C17.8165 20.3043 16.3317 21.1794 14.674 21.6383C14.1778 20.6658 13.1667 19.9998 12 19.9998C10.8333 19.9998 9.8222 20.6658 9.32603 21.6383C7.66832 21.1794 6.18354 20.3043 4.99121 19.1326C5.58406 18.2169 5.65467 17.0094 5.0718 15.9998C4.48848 14.9895 3.40622 14.4468 2.31595 14.5033C2.1097 13.7032 2 12.8643 2 11.9998ZM6.80385 14.9998C7.43395 16.0912 7.61458 17.3459 7.36818 18.5236C7.77597 18.8138 8.21005 19.0652 8.66489 19.2741C9.56176 18.4712 10.7392 17.9998 12 17.9998C13.2608 17.9998 14.4382 18.4712 15.3351 19.2741C15.7899 19.0652 16.224 18.8138 16.6318 18.5236C16.3854 17.3459 16.566 16.0912 17.1962 14.9998C17.8262 13.9085 18.8225 13.1248 19.9655 12.7493C19.9884 12.5015 20 12.2516 20 11.9998C20 11.7481 19.9884 11.4981 19.9655 11.2504C18.8225 10.8749 17.8262 10.0912 17.1962 8.99982C16.566 7.90845 16.3854 6.65378 16.6318 5.47605C16.224 5.18588 15.7899 4.93447 15.3351 4.72552C14.4382 5.52844 13.2608 5.99982 12 5.99982C10.7392 5.99982 9.56176 5.52844 8.66489 4.72552C8.21005 4.93447 7.77597 5.18588 7.36818 5.47605C7.61458 6.65378 7.43395 7.90845 6.80385 8.99982C6.17376 10.0912 5.17754 10.8749 4.03451 11.2504C4.01157 11.4981 4 11.7481 4 11.9998C4 12.2516 4.01157 12.5015 4.03451 12.7493C5.17754 13.1248 6.17376 13.9085 6.80385 14.9998ZM12 14.9998C10.3431 14.9998 9 13.6567 9 11.9998C9 10.343 10.3431 8.99982 12 8.99982C13.6569 8.99982 15 10.343 15 11.9998C15 13.6567 13.6569 14.9998 12 14.9998ZM12 12.9998C12.5523 12.9998 13 12.5521 13 11.9998C13 11.4475 12.5523 10.9998 12 10.9998C11.4477 10.9998 11 11.4475 11 11.9998C11 12.5521 11.4477 12.9998 12 12.9998Z"></path>
                  </svg>
                  Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13Z" />
                  </svg>
                  Integrations
                </a>
                <hr className="border-gray-200 dark:border-gray-700" />
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z" />
                  </svg>
                  Guide
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z" />
                  </svg>
                  Help Center
                </a>
                <hr className="border-gray-200 dark:border-gray-700" />
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z" />
                  </svg>
                  Log out
                </a>
              </div>
            </div>
          </div>
         
        </>
      </div>
    </div>
  );
};

export default page;
