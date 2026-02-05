import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending } = useAuth();

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="max-w-md w-full">
      {/* Header section  */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-slate-800 tracking-tight">
          Sign In
        </h2>
        <p className="text-slate-500 mt-3 text-lg">
          Access the recruitment dashboard
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@americanveterinarygroup.com"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#2da1db] placeholder:text-gray-300"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#2da1db] placeholder:text-gray-300"
          />
        </div>

        {/* Submit Button  */}
        <button
          type="submit"
          disabled={isPending}
          className="mt-4 w-full rounded-lg bg-[#2da1db] py-4 text-lg font-bold text-white transition-all hover:bg-[#2589ba] active:scale-[0.99] disabled:opacity-50"
        >
          {isPending ? "Signing in..." : "Sign In"}
        </button>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center">
          <a href="#" className="text-sm font-semibold text-[#2da1db] hover:underline">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};