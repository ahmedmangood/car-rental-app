"use client";
import React, { useState } from "react";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) window.location.href = "/auth/signin";
    else setError("Sign up failed. Try another email.");
  };

  return (
    <form
      className="bg-white p-8 rounded shadow w-full max-w-md flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Sign Up</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default SignUpForm;
