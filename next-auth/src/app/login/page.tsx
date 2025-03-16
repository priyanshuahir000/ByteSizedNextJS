"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-8">
        <div>
          <h2 className="text-center text-2xl font-light text-gray-800 mb-8">
            Log in
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 text-gray-800 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2  text-gray-800 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-gray-800 focus:ring-gray-700 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>

            <Link
              href="/forgot-password"
              className="text-gray-600 hover:text-gray-800"
            >
              Forgot password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors duration-300"
            >
              Log in
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/register" className="text-gray-800 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
