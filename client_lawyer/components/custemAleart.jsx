import React from 'react'
import CustomAlertDemo from "./custemAleartDemo"

export default function CustomAlert(type,title,message) {
  return (
    <>
        <CustomAlertDemo 
         type={type}
         title={title}
         message={message}
      />  
    </>
    // <div className="space-y-4 p-4">
    //   <CustomAlert 
    //     type="success"
    //     title="Success"
    //     message="Your changes have been saved successfully."
    //   />
    //   <CustomAlert
    //     type="error"
    //     title="Error"
    //     message="There was a problem processing your request. Please try again."
    //   />
    //   <CustomAlert
    //     type="warning"
    //     title="Warning"
    //     message="Your account is about to expire. Please renew your subscription."
    //   />
    //   <CustomAlert
    //     type="info"
    //     title="Information"
    //     message="A new version of the application is available. Please update at your convenience."
    //   />
    // </div>
  )
}