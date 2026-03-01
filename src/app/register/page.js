'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Register() {
  const [userType, setUserType] = useState("buyer");

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center text-center font-[var(--font-audiowide)]">

      {/* Large Blobs */}
      <motion.div
        className="absolute bg-pink-300 rounded-full mix-blend-multiply filter blur-1xl opacity-50 w-[400px] h-[400px] top-[-100px] left-[-100px] z-0"
        animate={{ x: [0, 50, -30, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bg-purple-400 rounded-full mix-blend-multiply filter blur-1xl opacity-50 w-[450px] h-[450px] bottom-[-100px] right-[-100px] z-0"
        animate={{ x: [0, -60, 30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* 5 Small Floating Blobs */}
      <motion.div
        className="absolute w-24 h-24 bg-blue-200 rounded-full top-[10%] left-[15%] z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-green-200 rounded-full bottom-[15%] left-[10%] z-0"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-yellow-100 rounded-full top-[20%] right-[20%] z-0"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-red-200 rounded-full bottom-[10%] right-[15%] z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-indigo-200 rounded-full top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold text-black">Join XENOVA</h1>
        <p className="text-black">Choose your role to continue:</p>

        <div className="flex space-x-6">
          <Link href="/register/buyer">
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-800 transition">
              Register as Buyer
            </button>
          </Link>
          <Link href="/register/seller">
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-800 transition">
              Register as Seller
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
