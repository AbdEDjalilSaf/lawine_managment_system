"use client"
import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
import { useLogout } from '../hooks/useLogout';
// import axios from 'axios';

const AdminPage = () => {

  const logout = useLogout();

  // const router = useRouter();

  // const logOut = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://9238-41-109-160-76.ngrok-free.app/auth/logout",
  //       {}, // Send an empty object for request body if no data is required
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
      
  //     if (res.status === 200) {
  //       router.push("/logIn");
  //     }
  //   } catch (error) {
  //     console.error("Logout error:", error); // Log the error for debugging
  //   }
  // };

  return (
    <>
      <h2>Admin Page</h2>
      <Button onClick={logout} className="absolute m-4 right-2">Log out</Button>
    </>
  );
};

export default AdminPage;
