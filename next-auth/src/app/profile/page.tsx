"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState({
    _id: "",
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setUser(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile-container flex flex-col items-center justify-center min-h-screen py-2">
      <div className="profile-card bg-neutral-800 p-8 rounded-lg shadow-lg max-w-md w-full text-white">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Profile
        </h1>
        {loading ? (
          <div className="text-center py-4 text-white">Loading...</div>
        ) : (
          <div className="profile-info space-y-4">
            <div className="user-detail p-4 bg-neutral-700 rounded-md">
              <p className="text-sm text-gray-300">User ID</p>
              <p className="font-medium text-white">{user._id}</p>
            </div>
            <div className="user-detail p-4 bg-neutral-700 rounded-md">
              <p className="text-sm text-gray-300">Username</p>
              <p className="font-medium text-white">{user.username}</p>
            </div>
            <div className="user-detail p-4 bg-neutral-700 rounded-md">
              <p className="text-sm text-gray-300">Email</p>
              <p className="font-medium text-white">{user.email}</p>
            </div>
          </div>
        )}
        <div className="mt-8 flex flex-col space-y-4">
          <button
            onClick={logout}
            className="btn-primary bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md text-white transition-colors"
          >
            Logout
          </button>
          <Link
            href="/"
            className="text-center py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-md text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
