"use client"

import { signUpUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import CustomAlert from "@/components/custemAleart"
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { User, Lock } from "lucide-react"
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
            <Input {...form.register("fullName")} type="text" attribute="fullName" name="fullName"  placeholder="Full Name" />
          </div>
          <div className="">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input   {...form.register("email")}  type="email" attribute="email" name="email"  placeholder="name@gmail.com" className="pr-10" />
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          </div>
          <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input {...form.register("password")}  type="password" attribute="password" name="password" placeholder="Password" className="pr-10" />
            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
