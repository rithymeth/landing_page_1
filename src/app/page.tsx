"use client";

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  // null: unknown, true: mobile, false: desktop
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Function to check if the viewport width is within mobile range
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Run the check on mount
    checkIsMobile();

    // Update on window resize
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Until we determine the viewport size, don't render anything
  if (isMobile === null) {
    return null;
  }

  // If not mobile, show a fallback message
  if (!isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl font-bold text-center text-black">
          This site is only available on mobile devices.
        </p>
      </div>
    );
  }

  // Mobile-only content
  return (
    <div className="relative">
      <Head>
        <title>My Next.js App</title>
        <meta
          name="description"
          content="My Next.js app with layered images and video"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background */}
      <div className="relative w-full h-[100vh] z-0">
        <img
          src="/assets/BG.png"
          alt="Background"
          className="w-full h-full z-0"
        />
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/assets/logo.png" alt="Logo" className="mt-[20px] z-10" />
      </div>

      {/* You win image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/assets/youwin.png" alt="You Win" className="mt-[50px] z-10" />
      </div>

      {/* Frame and Video */}
      <div className="absolute top-0 left-0 z-10">
        <div className="flex justify-center items-center">
          <img
            src="/assets/FRAME.png"
            alt="Frame"
            className="w-[850px] h-[800px] mt-[50px] z-10"
          />
        </div>
        <div className="flex justify-center items-center">
          <video
            src="/assets/video.mp4"
            controls
            className="w-[250px] h-[150px] z-100 mt-[-1030px]"
          />
        </div>
      </div>

      {/* Text 2 */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-20 flex justify-center items-center mt-2">
        <img src="/assets/text 2.png" alt="Text 2" className="z-10" />
      </div>

      {/* Text 5 and Mobile */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-20 flex justify-center items-center">
        <div className="flex justify-center items-center mt-12">
          <img src="/assets/text 5.png" alt="Text 5" className="z-10" />
          <img
            src="/assets/mobile.png"
            alt="Mobile"
            className="z-10 ml-[-400px]"
          />
        </div>
      </div>

      {/* Text 3 */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-30 flex justify-center items-center mt-12">
        <img
          src="/assets/text 3.png"
          alt="Text 3"
          className="w-[800px] h-[800px] z-10"
        />
      </div>

      {/* Text 4 */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-30 flex justify-center items-center mt-8">
        <img
          src="/assets/text 4.png"
          alt="Text 4"
          className="w-[800px] h-[800px] z-10"
        />
      </div>

      {/* Icon Game */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-30 flex justify-center items-center mt-12">
        <img
          src="/assets/icon game.png"
          alt="Icon Game"
          className="w-[800px] h-[800px] z-10"
        />
      </div>
    </div>
  );
}
