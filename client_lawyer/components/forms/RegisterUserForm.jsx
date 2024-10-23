"use client"

import { signUpUserForm } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Link from "next/link";


const RegisterUserForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });


  
  return (
    <>
         <form>
          <div className="mb-4">
            <Input type="text" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Email Address" />
          </div>
          <div className="mb-6">
            <Input type="password" placeholder="Password" />
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>

          <p className="text-center mt-4">
            Already have an account? <Link href="logIn" className="text-blue-600">Log in</Link>
          </p>
        </form>
    </>
  )
}

export default RegisterUserForm
