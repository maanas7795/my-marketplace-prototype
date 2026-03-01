'use client'
import { useState } from 'react'
import { supabase } from '../../utils/supabaseClient';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setMessage(`Login failed: ${error.message}`);
      return;
    }

    const user = data.user;
    const userType = user?.user_metadata?.user_type;

    if (userType === 'seller') {
      router.push('/dashboard/seller');
    } else if (userType === 'buyer') {
      router.push('/buyer/dashboard');
    } else {
      setMessage('Login successful, but user type is missing.');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white text-black">
      {/* Floating Blobs */}
      <motion.div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-400 rounded-full blur-1xl opacity-40 mix-blend-multiply" animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="absolute top-[20%] right-[-100px] w-[220px] h-[220px] bg-blue-400 rounded-full blur-1xl opacity-40 mix-blend-multiply" animate={{ y: [0, -25, 0], x: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute bottom-[-80px] left-[30%] w-[300px] h-[300px] bg-purple-400 rounded-full blur-1xl opacity-30 mix-blend-multiply" animate={{ y: [0, 20, 0], x: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="absolute top-[50px] right-[30%] w-[200px] h-[200px] bg-yellow-300 rounded-full blur-1xl opacity-40 mix-blend-multiply" animate={{ y: [0, 15, 0], x: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute bottom-[10%] right-[10%] w-[180px] h-[180px] bg-green-400 rounded-full blur-1xl opacity-40 mix-blend-multiply" animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />

      {/* Login Box */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="bg-white backdrop-blur-xl rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-6 font-[var(--font-audiowide)] text-black">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-900 transition-all duration-300"
            >
              Log In
            </button>
            {message && <p className="text-sm text-center mt-2 text-red-600">{message}</p>}
            <p className="text-sm text-center mt-4 text-black">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
