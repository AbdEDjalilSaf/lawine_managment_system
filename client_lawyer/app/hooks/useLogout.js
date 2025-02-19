'use client'

import { useRouter } from 'next/navigation';
import { logoutUser } from '../api/auth';

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    const success = await logoutUser();
    if (success) {
      router.push("/logIn");
    }
  };

  return logout;
};