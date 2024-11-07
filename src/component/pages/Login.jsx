import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login successful:", response);

    navigate("/dashboard");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side wala */}
      <div className="flex flex-col items-center justify-center w-1/2 p-6 text-white bg-gray-900">
        <h1 className="mb-6 text-5xl font-bold">BASE</h1>
        <div className="flex mt-4 space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-2xl hover:text-indigo-500" />
          </a>
        </div>
      </div>

      {/* Right Side wala  */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8 bg-white">
        <h2 className="mb-6 text-3xl font-semibold">Sign In</h2>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-2 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600">
            Sign In
          </button>
        </form>

        {/* Google Login Button */}
        <div className="w-full max-w-sm mt-4">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
        </div>

        <p className="mt-4 text-gray-600">
          New here?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
