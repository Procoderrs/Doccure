import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <div className="min-h-screen bg-white font-user flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

        {/* Left — Illustration */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-10 h-full">
          <img
            src="/login-banner.png"
            alt="Login"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right — Form */}
        <div className="px-6 md:px-10 py-10 md:py-12">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Login Doccure
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#316dff] transition-colors duration-200"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-[#316dff] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#316dff] transition-colors duration-200 pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword
                  ? <RiEyeLine size={18} />
                  : <RiEyeOffLine size={18} />
                }
              </button>
            </div>
          </div>

          {/* Remember Me + OTP */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 accent-[#316dff]"
              />
              <span className="text-sm text-gray-600">Remember Me</span>
            </label>
            <Link
              to="/login-otp"
              className="text-sm text-gray-700 hover:text-[#316dff] transition-colors"
            >
              Login with OTP
            </Link>
          </div>

          {/* Sign In button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg text-white font-semibold text-sm mb-5 transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-3">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign in With Google
          </button>

          {/* Facebook */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
            Sign in With Facebook
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#316dff] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}