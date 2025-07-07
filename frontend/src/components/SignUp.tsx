import axios from "axios";
import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', formData); 
      console.log('Sign up success:', response.data);
    } catch (error) {
      console.log('Sign up error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white border border-[#e8e5df] shadow-sm rounded-lg">
        <h2 className="text-2xl font-serif text-[#2f2e2c] mb-6 text-center">Create Your Ågane Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#2f2e2c] mb-1">Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-[#e8e5df] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2f2e2c] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#e8e5df] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2f2e2c] mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-[#e8e5df] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
              placeholder="••••••••"
              required
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
