'use client'; // This must be the first line in the file

import { signInUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AlertTriangle } from 'lucide-react';
import { useLogin } from "@/app/hooks/useLogin";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setCardentials } from "../../features/auth/authSlice";

const LogInUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login, error } = useLogin();
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(signInUserForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("Form submission started", values);
    try {
      const userData = await login(values.email, values.password);
      console.log("User Data:", userData); // Log the response to verify its structure
      if (userData && userData.user) {
        dispatch(setCardentials({ ...userData, user: userData.user }));
      } else {
        console.error("User data is undefined or missing user property");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          {...form.register("email")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {form.formState.errors.email && (
          <div className="flex items-center mt-4 gap-4 p-3 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <AlertTriangle className="h-4 w-4" />
            <div>
              <div className="font-medium">Error</div>
              <div>{form.formState.errors.email.message}</div>
            </div>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...form.register("password")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {form.formState.errors.password && (
          <div className="flex items-center mt-4 gap-4 p-3 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <AlertTriangle className="h-4 w-4" />
            <div>
              <div className="font-medium">Error</div>
              <div>{form.formState.errors.password.message}</div>
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className={`w-full bg-black text-white font-semibold rounded-md px-4 py-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#444]'}`}
        disabled={isLoading}
      >
        Log In
      </button>
      <p className="text-center mt-6 text-sm text-gray-600">
        Don&rsquo;t have an account?{" "}
        <Link href="/regester" className="text-blue-600 font-medium  hover:text-blue-800">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LogInUserForm;