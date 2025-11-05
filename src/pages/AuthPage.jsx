import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getRegisteredUsers,
  saveRegisteredUsers,
  setAuth,
  getAuth,
} from "../utils/auth";

export default function AuthPage() {
  const [mode, setMode] = useState("signin"); // 'signin' or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (getAuth()) navigate("/config");
  }, [navigate]);

  // ---------- SIGN UP ----------
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim();
    const cleanName = name.trim();

    // Validation
    if (!cleanName) return setError("Full name is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
      return setError("Invalid email address");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");
    if (password !== confirm) return setError("Passwords do not match");

    const users = getRegisteredUsers();
    if (users.find((u) => u.email === cleanEmail))
      return setError("User already exists");

    // Save user
    users.push({ name: cleanName, email: cleanEmail, password });
    saveRegisteredUsers(users);
    setAuth(cleanEmail);
    navigate("/config");
  };

  // ---------- SIGN IN ----------
  const handleSignin = (e) => {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim();
    const users = getRegisteredUsers();
    const user = users.find(
      (u) => u.email === cleanEmail && u.password === password
    );

    if (!user) return setError("Invalid email or password");
    setAuth(cleanEmail);
    navigate("/config");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.svg" alt="StackGuard" className="h-10" />
            <h1 className="text-2xl font-bold text-primary">Stackguard</h1>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Secure your application with advanced secret key protection
          </p>
        </div>

        {/* Form */}
        <form onSubmit={mode === "signin" ? handleSignin : handleSignup}>
          {mode === "signup" && (
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          {mode === "signup" && (
            <div className="mb-3">
              <input
                type="password"
                placeholder="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2.5 rounded-md hover:bg-[#3a066c]"
          >
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="text-center mt-4 text-sm text-gray-500">
          {mode === "signin" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-primary font-medium"
              >
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("signin")}
                className="text-primary font-medium"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
