
import Image from 'next/image'
import Link from 'next/link'
import  LawyerTwo  from '@/public/lawyerTwo.jpeg'
import { Button } from "@/components/ui/button"
import SignInUserForm from "@/components/forms/LogInUserForm"


export default function signInPage() {

  return (
    <div className="flex md:flex-row h-screen">
      {/* Left side with image, full width on small screens */}
      <div className="md:w-1/2 w-full h-64 md:h-full relative sc:hidden md:block">
        <Image 
          src={LawyerTwo} 
          alt="Decorative image"
          priority={true}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side with form */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-background py-8 px-4 md:py-0">
        <div className="max-w-md w-full relative px-6 py-12">
          <h1 className="text-3xl font-bold mb-9 text-center md:text-left">Welcome Back</h1>

          <div className="mb-4">
            <Button variant="outline" className="w-full mb-2">
              Log in with Google
            </Button>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
<SignInUserForm />
           {/* <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  {...form.register("email")}
                />
                 {form.formState.errors.email && (
                  <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                )} 

              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...form.register("password")}
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </Form>  */}
        </div>
        <p className="text-center absolute bottom-4 right-5 text-muted-foreground text-sm">
          © Copyright - All rights reserved 2024
        </p>
      </div>
    </div>
  )
}