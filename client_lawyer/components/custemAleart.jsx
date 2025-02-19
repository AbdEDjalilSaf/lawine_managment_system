
import CustomAlertDemo from "@/components/custemAleartDemo"
// Basic CustomAlert component that directly renders CustomAlertDemo
export default function CustomAlert({ type, title, message }) {
  return (
    <div className="space-y-4 p-4">
      <CustomAlertDemo type={type} title={title} message={message} />
    </div>
  );
}

// Demo Component to showcase different alert types
// export function CustomAlertContainer() {
//   return (
//     <>
//        <div className="space-y-4 p-4">
//        <CustomAlert
//          type="success"
//          title="Success"
//          message="Your changes have been saved successfully."
//       /></div> 
//     </>
//     // <div className="space-y-4 p-4">
//     //   <CustomAlert
//     //     type="success"
//     //     title="Success"
//     //     message="Your changes have been saved successfully."
//     //   />
//     //   <CustomAlert
//     //     type="error"
//     //     title="Error"
//     //     message="There was a problem processing your request. Please try again."
//     //   />
//     //   <CustomAlert
//     //     type="warning"
//     //     title="Warning"
//     //     message="Your account is about to expire. Please renew your subscription."
//     //   />
//     //   <CustomAlert
//     //     type="info"
//     //     title="Information"
//     //     message="A new version of the application is available. Please update at your convenience."
//     //   />
//     // </div>
//   );
// }
