import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setConfigKey, getConfigKey } from "../utils/auth";

export default function ConfigPage() {
  const [key, setKey] = useState(getConfigKey() || "");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    if (key.length < 100)
      return setError("Key must be at least 100 characters long.");
    if (key.length > 1000)
      return setError("Key must not exceed 1000 characters.");
    setConfigKey(key);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.svg" alt="StackGuard" className="h-10" />
            <h1 className="text-2xl font-bold text-primary">Stackguard</h1>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Verify your public key to continue protecting your data
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleVerify}>
          <textarea
            rows="5"
            placeholder="Enter your public key here..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-primary"
          />
          <div className="text-sm text-gray-500 mt-2">
            Characters: {key.length}
          </div>
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2.5 rounded-md mt-4 hover:bg-[#3a066c]"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}
