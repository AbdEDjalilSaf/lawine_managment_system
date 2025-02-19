'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../api/auth';

export const useRegister = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const register = async () => {
    setError(null);
  const fullName = (document.getElementById('fullName')).value;
  const email = (document.getElementById('email')).value;
  const password = (document.getElementById('password')).value;
    const { success, data, error: registrationError } = await registerUser(fullName,email,password);
    if (success && data) {
      router.push("/request-form");
    } else {
      setError(registrationError || "Registration failed");
    }
  };

  return { register, error };
};