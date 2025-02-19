import Image from "next/image";
import LawyerTwo from "@/public/lawyerTwo.jpeg";
import  GoogleImage  from '@/public/google.png'
import RegisterUserForm from "@/components/forms/RegisterUserForm";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left side with image, full width on small screens */}
        <div className="md:w-1/2 w-full h-64 md:h-full relative hidden md:block">
          <Image
            src={LawyerTwo}
            alt="Decorative image"
            priority={true}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side with form */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-white py-8 px-4 md:py-0">
          <div className="max-w-md w-full relative px-6 py-12">
            <h1 className="text-3xl font-bold mb-9 text-center md:text-left">
              Welcome , let&rsquo;s  Start
            </h1>

            {/* Sign up with Google button */}
            <div className="mb-4">
   <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [& svg]:pointer-events-none [&_ svg]:size-4 [& svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full mb-2">
   <div className=' flex gap-3 items-center'>
          <Image 
          src={GoogleImage} 
          alt="direct register image"
          priority={true}
          className="w-7"
          />
        Register with Google
   </div>
   </button>
            </div>

            <p className="text-center my-4 text-gray-500">- OR -</p>

            {/* Register form */}
            <RegisterUserForm />
          </div>
          
          <p className="text-center absolute bottom-4 right-5 text-gray-400 text-sm">
            © Copyright - All rights reserved 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
