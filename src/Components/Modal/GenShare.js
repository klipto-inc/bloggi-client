"use client";

import React, { useEffect, useRef, useState } from "react";

const GenShare = ({ linkToShare }) => {
  const linkInputRef = useRef(linkToShare);
  const [copystate, setCopyState] = useState("copy");

  useEffect(() => {
    linkInputRef.current = linkToShare;
  }, [linkToShare]);

  const copyLinkToClipboard = () => {
    const linkToCopy = linkInputRef.current;

    navigator.clipboard.writeText(linkToCopy).then(() => {
      console.log("Link copied to clipboard:", linkToCopy);
      setCopyState("copied");
      setTimeout(() => {
        setCopyState("copy");
      }, 2000);
    });
  };

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      linkToShare
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      linkToShare
    )}`;
    window.open(twitterShareUrl, "_blank");
  };

  const shareOnInstagram = () => {
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
      linkToShare
    )}`;
    window.open(instagramShareUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      linkToShare
    )}`;
    window.open(whatsappShareUrl, "_blank");
  };

  const shareOnTelegram = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      linkToShare
    )}`;
    window.open(telegramShareUrl, "_blank");
  };
  return (
    <div className=" absolute top-10 mt-2 right-0 bg-white rounded-lg">
      <div className="min-h-fit p-3  flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <h2 className="text-md font-normal text-center text-gray-700 mr-3">
                Share
              </h2>
              <button
                className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                onClick={shareOnFacebook}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                onClick={shareOnFacebook}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlSpace="preserve"
                >
                  <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
                </svg>
              </button>
              <button
                className="bg-green-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                onClick={shareOnWhatsApp}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                  />
                </svg>
              </button>
              <button
                className="bg-blue-300 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                onClick={shareOnTelegram}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                </svg>
              </button>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <div
              className="flex items-center justify-between py-2 mt-4 border-1 border-gray-200"
              onClick={copyLinkToClipboard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="ml-2 fill-gray-500"
              >
                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" />
                <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" />
              </svg>
              {/* <input
                className="w-full bg-transparent outline-non text-gray-600"
                type={linkToShare}
                placeholder="copy to clipboard"
                defaultValue={linkToShare}
                readOnly
              /> */}
              <span className="text-gray-600 overflow-hidden w-32 truncate">
                {linkToShare}
              </span>
              <button
                className="bg-[#FF3131] text-white rounded text-sm py-2 px-5 mr-2"
                onClick={copyLinkToClipboard}
              >
                {copystate}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenShare;
