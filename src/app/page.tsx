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
      <div className="relative w-full h-[100vh]">
        <img
          src="/assets/bg1.png"
          alt="Background"
          className="w-full h-full z-20"
        />
      </div>
      <div className="absolute top-0 left-0" style={{ zIndex: -10 }}>
        <iframe
          src="https://embed.wave.video/svy0gzTRPesYKLX9?autoplay=1"
          className="w-[255px] h-[180px] rounded-lg mt-[260px] ml-[88px]" 
        ></iframe>
      </div>
      <div className="absolute top-0 left-0" style={{ zIndex: 110 }}>
        <a href="https://k9winaus.com/?aff=BOM">
          <img src="/assets/PLAYNOW.gif" alt="Background" className="w-[220px] h-[50px] rounded-lg mt-[690px]" />
        </a>
      </div>
      <div className="absolute top-0 left-0" style={{ zIndex: 120 }}>
      <a href="https://k9winaus.com/?aff=BOM">
        <img src="/assets/DOWNLOAD.gif" alt="Background" className="w-[220px] h-[50px] rounded-lg mt-[690px] ml-[180px]" />
        </a>
      </div>
    </div>
  );
}
