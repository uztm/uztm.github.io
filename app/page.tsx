"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const heroRef = useRef(null);
  const sloganRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(heroRef.current, { opacity: 0, y: -30 })
      .from(sloganRef.current, { opacity: 0, y: 20 }, "-=0.7")
      .from(imageRef.current, { opacity: 0, scale: 0.9 }, "-=0.6")
      .from(ctaRef.current, { opacity: 0, y: 20 }, "-=0.6");
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image
            src="/neurobit.png"
            alt="Neurobit Logo"
            width={200}
            height={60}
          />
        </div>
        <a
          href="https://linkoraa.tech"
          className="text-sm px-5 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          Product Home
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-20">
        <h1
          ref={heroRef}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg mb-6"
        >
          Neurobit Systems
        </h1>
        <p
          ref={sloganRef}
          className="text-lg md:text-xl text-zinc-300 max-w-xl mb-10"
        >
          Build with code. Felt as art.
        </p>

        <div
          ref={imageRef}
          className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-white/5 backdrop-blur-md mb-12"
        >
          <Image
            src="/linkoraa.png"
            alt="Neurobit Product"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <a
          ref={ctaRef}
          href="https://linkoraa.tech"
          className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105 transform transition"
        >
          Explore Product
        </a>
      </section>

      {/* Message Section */}
      <section className="px-6 py-20 bg-opacity-50 rounded-t-3xl text-center">
        <h2 className="text-4xl font-semibold mb-4">More Than a Product</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
          Neurobit is a modern software company that delivers beautiful and
          functional experiences. We craft code like art and deliver real-world
          value through a single, powerful product:
          <strong className="text-white"> Linkoraa</strong>.
        </p>

        <div className="mt-12 text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Neurobit Systems. All rights
          reserved.
        </div>
      </section>
    </main>
  );
}
