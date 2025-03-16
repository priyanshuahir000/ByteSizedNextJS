"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    currentPassword: "",
    newPassword: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate form data
    const isNameValid = profile.name.length >= 2;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(profile.email);

    setIsValid(isNameValid && isEmailValid);
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Handle profile update logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <div>
          <h2 className="text-center text-2xl font-light text-gray-800 mb-8">
            Profile Settings
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-800 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Full name"
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={profile.email}
                onChange={handleChange}
                className="w-full text-gray-800  px-3 py-2 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-800 outline-none transition-all duration-300 text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full  py-2 px-4 text-white text-sm transition-colors duration-300 ${
                isValid
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-800 cursor-not-allowed"
              }`}
            >
              Update Profile
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Back to Dashboard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
