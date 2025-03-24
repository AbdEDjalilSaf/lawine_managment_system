"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../api/auth';

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const login = async () => {
    setError(null);
    const email = (document.getElementById('email')).value;
    const password = (document.getElementById('password')).value;
    const { success, data, error: loginError } = await loginUser({ email, password });
    if (success && data) {
      router.push("/request-form");
    } else {
      setError(loginError || "Login failed");
    }
  };

  return { login, error };
};