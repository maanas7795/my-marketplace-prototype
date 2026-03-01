'use client'

import{useRouter}from "next/navigation";
import { useState } from 'react'
import { supabase } from '../../../utils/supabaseClient'

export default function SellerRegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [gstNumber, setGstNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || !businessName) {
      setMessage('Please fill in all required fields')
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(`Error: ${error.message}`)
    } else {
      setMessage('Sign-up successful! Check your email to verify your account.')
      console.log('Seller Info:', { businessName, gstNumber })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-black">Seller Registration</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="GST Number (Optional)"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
        >
          Register as Seller
        </button>
        {message && <p className="text-center text-sm text-red-600">{message}</p>}
      </form>
    </div>
  )
}
