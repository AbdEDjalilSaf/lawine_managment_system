"use client"

import { signUpUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Link from "next/link";


const RegisterUserForm = () => {

  const form = useForm({
    resolver: zodResolver(signUpUserForm),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });


  const onSubmit = (e)=>{
    e.preventDefault();
    console.log("onSubmit Success");
  }

  
  return (
    <>
    <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="">
          <Label htmlFor="email">Full Name</Label>
            <Input type="text" attribute="fullName" name="fullName"  placeholder="Full Name" />
          </div>
          <div className="">
          <Label htmlFor="email">Email</Label>
            <Input type="email" attribute="email" name="email" placeholder="Email Address" />
          </div>
          <div className="mb-6">
          <Label htmlFor="email">Password</Label>
            <Input type="password" attribute="password" name="password" placeholder="Password" />
          </div>

          <Button type="submit" className="w-full">
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
