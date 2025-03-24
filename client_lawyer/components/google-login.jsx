'use client'

// import { useEffect, useState } from 'react'
import  GoogleImage  from '@/public/google.png'
import Image from 'next/image'


export default function GoogleLogin() {


const onSubmit = async ()=>{

window.location.href='https://4d05-41-109-93-17.ngrok-free.app/auth/google'


}


//   useEffect(() => {
//     if (typeof window !== 'undefined' && !window.google) {
//       const script = document.createElement('script')
//       script.src = 'https://accounts.google.com/gsi/client'
//       script.async = true
//       script.defer = true
//       script.onload = () => setIsGoogleScriptLoaded(true)
//       document.head.appendChild(script)

//       return () => {
//         document.head.removeChild(script)
//       }
//     } else if (window.google) {
//       setIsGoogleScriptLoaded(true)
//     }
//   }, [])

//   useEffect(() => {
//     if (isGoogleScriptLoaded && window.google) {
//       window.google.accounts.id.initialize({
//         client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//         callback: handleCredentialResponse
//       })
//       window.google.accounts.id.renderButton(
//         document.getElementById("googleLoginButton"),
//         { theme: "outline", size: "large", width: "100%" }
//       )
//     }
//   }, [isGoogleScriptLoaded])

//   function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential)
//     // Here you would typically send this token to your backend
//     // for verification and to create a session
//   }

  return (
    <div className="w-full">
    <button onClick={onSubmit}>
      <div
        id="googleLoginButton"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [& svg]:pointer-events-none [&_ svg]:size-4 [& svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full mb-2"
      >
        <div className="flex gap-3 items-center">
        <Image
          src={GoogleImage} 
          alt="Google logo"
          priority={true}
          className="w-7"
        />
          Log in with Google
        </div>
      </div>
      </button>
    </div>
  )
}