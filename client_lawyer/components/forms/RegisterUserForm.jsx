"use client";

import { signUpUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import { MdOutlineError } from "react-icons/md";
// import CustomAlert from "@/components/custemAleart"
import { useRegister } from "@/app/hooks/useRegister";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";
// import axios from "axios";

const RegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpUserForm),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  const { register, error } = useRegister();

  const onSubmit = async (values) => {
    console.log("Form submission started register", values);
    await register(fullName,email, password);

    // setLoading(true);
    // try {
    //   setError(false);
    //   const response = await axios.post(
    //     "https://9238-41-109-160-76.ngrok-free.app/auth/register",
    //     values,
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );

    //   if (response) {
    //     setLoading(false);
    //     router.push("/admin");
    //   } else {
    //     setError(true);
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   console.error(" --- Fetch register Error ---", error);
    //   setError(true);
    //   setLoading(false);
    // }
  };


  return (
    <>
      {/* {error && (
        <CustomAlert
          title="Incorrect Credentials"
          state="failure"
          discr="Your password or email is incorrect."
          icon={<MdOutlineError color="red" size={20} />}
        />
      )} */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative mt-1">
            <input
              {...form.register("fullName")}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1">
            <input
              {...form.register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <input
              {...form.register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            
          </div>
        </div>
        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-[#444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/logIn" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </>
  );
};

export default RegisterUserForm;
