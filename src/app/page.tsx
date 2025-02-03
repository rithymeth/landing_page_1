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

  // --------------------
  // Mobile Content
  // --------------------
  if (isMobile) {
    return (
      <div className="relative bg-black">
        <Head>
          <title>My Next.js App - Mobile</title>
          <meta name="description" content="My Next.js app with layered images and video for mobile" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="../app/globals.css" />
        </Head>

        {/* Background */}
        <div className="absolute top-0 left-0 w-[430px] h-[932px] overflow-hidden">
          <img src="/assets/bg1.png" alt="Background" className="w-full h-full z-20" />
        </div>

        {/* Video container with a lower z-index so it sits behind the background */}
        <div className="absolute top-0 left-0 w-[255px] h-[220px] z-10">
          <iframe
            src="https://embed.wave.video/svy0gzTRPesYKLX9?autoplay=1"
            className="w-[255px] h-[200px] rounded-lg mt-[260px] ml-[88px]"
            title="Mobile Video"
          ></iframe>
        </div>

        <div className="absolute top-0 left-0 w-[220px] h-[50px]">
          <a href="https://k9winaus.com/?aff=BOM">
            <img
              src="/assets/PLAYNOW.gif"
              alt="Play Now"
              className="w-[220px] h-[50px] rounded-lg mt-[690px]"
            />
          </a>
        </div>

        <div className="absolute top-0 left-0 w-[220px] h-[50px]">
          <a href="https://k9winaus.com/?aff=BOM">
            <img
              src="/assets/DOWNLOAD.gif"
              alt="Download"
              className="w-[220px] h-[50px] rounded-lg mt-[690px] ml-[200px]"
            />
          </a>
        </div>
        <div className="absolute top-0 left-0 w-[60px] h-[60px] z-30">
        <a href="https://direct.lc.chat/14776932/">
          <img
            src="/assets/ICON.gif"
            alt="Download"
            className="w-full h-full rounded-lg mt-[400px] ml-[360px]"
          />
        </a>
      </div>
      </div>
    );
  }

  // --------------------
  // Desktop Content
  // --------------------
  return (
    // Adding "relative" here ensures that the absolute children are positioned relative to this container.
    <div className="relative bg-gray-100 min-h-screen">
      <Head>
        <title>My Next.js App - Desktop</title>
        <meta name="description" content="My Next.js app desktop version with enhanced design" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../app/globals.css" />
      </Head>

      <div className="relative bg-black w-[1920px] h-[1000px]">
        {/* Background Image - Ensure this is on top */}
        <img src="/assets/bgd.png" alt="Background" className="absolute top-0 left-0 w-full h-full z-20" />

        {/* Video - Ensure this is behind the background */}
        <div className="absolute top-0 left-0 w-[600px] h-[330px] z-10">
          <iframe
            src="https://embed.wave.video/svy0gzTRPesYKLX9?autoplay=1"
            className="w-[600px] h-[340px] rounded-lg mt-[450px] ml-[660px]"
            title="Desktop Video"
          ></iframe>
        </div>
      </div>


      <div className="absolute top-0 left-0 w-[300px] h-[80px] z-30">
        <a href="https://k9winaus.com/?aff=BOM">
          <img
            src="/assets/PLAYNOW.gif"
            alt="Play Now"
            className="w-full h-full rounded-lg mt-[690px] ml-[1320px]"
          />
        </a>
      </div>

      <div className="absolute top-0 left-0 w-[300px] h-[80px] z-30">
        <a href="https://k9winaus.com/?aff=BOM">
          <img
            src="/assets/DOWNLOAD.gif"
            alt="Download"
            className="w-full h-full rounded-lg mt-[690px] ml-[1620px]"
          />
        </a>
      </div>
      <div className="absolute top-0 left-0 w-[100px] h-[100px] z-30">
        <a href="https://direct.lc.chat/14776932/">
          <img
            src="/assets/ICON.gif"
            alt="Download"
            className="w-full h-full rounded-lg mt-[790px] ml-[1570px]"
          />
        </a>
      </div>
    </div>
  );
}
