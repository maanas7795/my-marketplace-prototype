"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* 🔵 8 Floating Animated Blobs */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-pink-400 rounded-full mix-blend-multiply blur-1xl opacity-70"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-blue-400 rounded-full mix-blend-multiply blur-1xl opacity-70"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{ top: "20%", right: "5%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full mix-blend-multiply blur-1xl opacity-70"
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        style={{ bottom: "5%", left: "30%" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-yellow-300 rounded-full mix-blend-multiply blur-1xl opacity-60"
        animate={{ x: [0, -70, 70, 0], y: [0, 60, -60, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "25%" }}
      />

      {/* 🔴 Extra 4 Blobs */}
      <motion.div
        className="absolute w-[280px] h-[280px] bg-red-400 rounded-full mix-blend-multiply blur-1xl opacity-60"
        animate={{ x: [0, 120, -120, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        style={{ top: "5%", right: "40%" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-green-400 rounded-full mix-blend-multiply blur-1xl opacity-50"
        animate={{ x: [0, -90, 90, 0], y: [0, 60, -60, 0] }}
        transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
        style={{ top: "35%", left: "5%" }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] bg-indigo-400 rounded-full mix-blend-multiply blur-1xl opacity-50"
        animate={{ x: [0, 70, -70, 0], y: [0, -60, 60, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        style={{ bottom: "25%", right: "10%" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-cyan-400 rounded-full mix-blend-multiply blur-1xl opacity-40"
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{ bottom: "15%", left: "15%" }}
      />
      {/* 🔘 Top Right Seller Dashboard Demo Button */}
      <div className="absolute top-6 right-6 z-50">
        <Link href="/dashboard/seller">
          <button className="px-4 py-2 rounded-lg border border-black bg-white text-black font-medium hover:bg-black hover:text-white transition">
            Seller Dashboard (Demo)
          </button>
        </Link>
      </div>
      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl font-bold tracking-widest font-[Audiowide] text-black">XENOVA</h1>
        <p className="text-xl mt-4 opacity-90 text-black">Secure. Smart. Seamless.</p>
        <a href="/login">
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition">
            Start
          </button>
        </a>
      </div>
    </div>
  );
}