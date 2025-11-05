import React from "react";
import { Link } from "react-router-dom";
import { getConfigKey, clearAuth } from "../utils/auth";

export default function DashboardPage() {
  const key = getConfigKey();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-primary mb-4">Dashboard Page</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Stackguard. You have successfully verified your configuration key.
        </p>

        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono">
          <strong>Key:</strong> {key ? key.slice(0, 80) + "..." : "Not set"}
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            to="/config"
            className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white"
          >
            Back to Config
          </Link>
          <button
            onClick={() => {
              clearAuth();
              window.location.href = "/auth";
            }}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-[#3a066c]"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
