'use client';

import { signInUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { AlertTriangle } from 'lucide-react'
// import { MdOutlineError } from 'react-icons/md';
// import CustomAlert from "@/components/custemAleart";
import { useLogin } from "@/app/hooks/useLogin";
// import { useRouter } from "next/navigation";
import Link from "next/link";
// import axios from "axios";

const LogInUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const router = useRouter();
  const { login, error } = useLogin();

  const form = useForm({
    resolver: zodResolver(signInUserForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("Form submission started", values);
    await login(email, password);
    // setIsLoading(true);

    // try {
    //   setError(false);
    //   const response = await axios.post(
    //     "https://9238-41-109-160-76.ngrok-free.app/auth/login",
    //     values,
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log("------------ response ---------", response.data);
      
    //   if (response) {
    //     router.push("/admin");
    //   } else {
    //     setError(true);
    //   }
    // } catch (error) {
    //   console.log(" --- fetch Log In Error ---", error);
    //   setError(true);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      {/* {error && (
        <CustomAlert
          title="Incorrect Credentials"
          state="failure"
          discr="Your password or email is not correct."
          icon={<MdOutlineError color="red" size={20} />}
        />
      )} */}
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
           <div className="flex items-center mt-4 gap-4 p-3 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
      <AlertTriangle className="h-4 w-4" />
      <div>
        <div className="font-medium">Error</div>
        <div>Email is not correct</div>
      </div>
    </div>
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
           <div className="flex items-center mt-4 gap-4 p-3 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
      <AlertTriangle className="h-4 w-4" />
      <div>
        <div className="font-medium">Error</div>
        <div>Password is wrong</div>
      </div>
    </div>
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
    </>
  );
}

export default LogInUserForm;
