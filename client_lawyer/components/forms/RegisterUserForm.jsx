"use client"

import { signUpUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { MdOutlineError } from 'react-icons/md';
import CustomAlert from "@/components/custemAleart"
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";


const RegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpUserForm),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  console.log("zod succesfull");

  const onSubmit = async (values)=>{
    console.log("Form submission started", values);

    setLoading(true);
    try {
      setError(false);
      const response = await axios.post(
        "https://4768-41-104-122-18.ngrok-free.app/auth/register",
        values,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const data = await response.json();
      console.log("    ------- register sucessful ----------",data);
    if(data){
      setLoading(false);

      router.push("/logIn")

    } else {
      setError(true);
      setLoading(false);
    }


  }catch(error){
    console.log(" --- fetch register Error ---",error);
  }
  }
  
  return (
    <>
    {error && (
        <CustomAlert
          title="Incorrect Credentials"
          state="failure"
          discr="your password or email is not correct"
          icon={<MdOutlineError color="red" size={20} />}
        />
      )}
    <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         {/* <form onSubmit={onSubmit} className="space-y-8"> */}
          <div className="">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <Input {...form.register("fullName")} type="text" attribute="fullName" name="fullName"  placeholder="Full Name" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg> 
            </div>
          </div>
          <div className="">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input   {...form.register("email")}  type="email" attribute="email" name="email"  placeholder="name@gmail.com" className="pr-10" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>         </div>
          </div>
          <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input {...form.register("password")}  type="password" attribute="password" name="password" placeholder="Password" className="pr-10" />
            {/* <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} /> */}
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#333333" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#444444" strokeWidth="0.528" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg>
           </div>
          </div>

          <Button type="submit" className="w-full" >
            Create Account
          </Button>

          <p className="text-center mt-4">
            Already have an account? <Link href="logIn" className="text-blue-600">Log in</Link>
          </p>
        </form>



        
        </Form>
    </>
  )
}

export default RegisterUserForm
