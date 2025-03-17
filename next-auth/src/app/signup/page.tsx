"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Validate form data
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = formData.password.length >= 6;
    const isUsernameValid = formData.username.length >= 3;

    setIsValid(isEmailValid && isPasswordValid && isUsernameValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      // Handle signup logic here
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-sm p-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded-sm w-3/4 mx-auto" />
            <div className="space-y-5">
              <div className="h-10 bg-gray-200 rounded-sm" />
              <div className="h-10 bg-gray-200 rounded-sm" />
              <div className="h-10 bg-gray-200 rounded-sm" />
            </div>
            <div className="h-10 bg-gray-200 rounded-sm" />
            <div className="h-4 bg-gray-200 rounded-sm w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-8">
        <div>
          <h2 className="text-center text-2xl font-light text-gray-800 mb-8">
            Create account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-800 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-800 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-800 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 px-4 text-white text-sm transition-colors duration-300 ${
                isValid
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-800 cursor-not-allowed"
              }`}
            >
              Create account
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-gray-800 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
