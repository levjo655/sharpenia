import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white border border-[#e8e5df] shadow-sm rounded-lg">
        <h2 className="text-2xl font-serif text-[#2f2e2c] mb-6 text-center">Create Your Ågane Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2f2e2c] mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-[#e8e5df] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2f2e2c] mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-[#e8e5df] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2f2e2c] mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-[#e8e5df] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2f2e2c] text-white py-2 rounded hover:bg-[#1f1e1c] transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-[#6e6b67]">
          Already have an account? <a href="/signin" className="underline hover:text-[#2f2e2c]">Sign In</a>
        </p>
      </div>
    </div>
  );
}
