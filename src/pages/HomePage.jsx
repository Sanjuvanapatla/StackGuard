import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "../utils/auth";

export default function HomePage() {
  const auth = getAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6">
      <div className="max-w-xl bg-white rounded-2xl shadow p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">StackGuard Frontend</h1>
        <p className="text-gray-600 mb-4">
          Minimal demo implementing Sign-In/Sign-Up, Config, and Dashboard flow.
        </p>
        <div className="flex justify-center gap-2">
          <Link to="/auth" className="bg-slate-900 text-white px-4 py-2 rounded">
            Sign In / Sign Up
          </Link>
          <Link to="/config" className="border px-4 py-2 rounded">
            Configuration
          </Link>
          <Link to="/dashboard" className="border px-4 py-2 rounded">
            Dashboard
          </Link>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          Signed in: {auth || "no"}
        </div>
      </div>
    </div>
  );
}
