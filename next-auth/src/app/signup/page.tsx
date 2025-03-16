"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate form data
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = formData.password.length >= 6;

    setIsValid(isEmailValid && isPasswordValid && formData.terms);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Handle signup logic here
    }
  };

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

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                defaultChecked={true}
                className="h-4 w-4 text-gray-800 focus:ring-gray-700 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-gray-600">
                I agree to terms
              </label>
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
