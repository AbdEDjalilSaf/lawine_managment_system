import Image from 'next/image'
import  LawyerTwo  from '@/public/lawyerTwo.jpg'
import  RegisterUserForm  from "@/components/forms/RegisterUserForm"
import { Button } from "@/components/ui/button"



const LogInPage = () => {
  return (
    <>
     <div className="flex  md:flex-row h-screen">
    {/* Left side with image, full width on small screens */}
    <div className="md:w-1/2 w-full h-64 md:h-full relative sc:hidden md:block  ">
      <Image 
        src={LawyerTwo} 
        alt="Decorative image" 
        layout="fill" 
        objectFit="cover"
        priority={true}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Right side with form */}
    <div className="md:w-1/2 w-full flex items-center justify-center bg-white py-8 px-4 md:py-0">
      <div className="max-w-md w-full relative px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Create Account</h1>

        <div className="mb-4">
          <Button variant="secondary" className="w-full mb-2">
            Sign up with Google
          </Button>
        </div>

        <p className="text-center my-4">- OR -</p>

     <RegisterUserForm />
      </div>
      <p className="text-center absolute bottom-4 right-5 text-black">
              @ copywrirte - all rights reserved 2024
            </p>
    </div>
  </div>

    </>
  )
}

export default LogInPage
