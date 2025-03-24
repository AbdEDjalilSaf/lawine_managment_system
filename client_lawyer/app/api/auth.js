import axios from 'axios';

const API_URL = 'https://4607-197-207-186-53.ngrok-free.app';
// process.env.NEXT_PUBLIC_API_URL


// --------------- log out -----------------
export const logoutUser = async () => {
  try {
    const res = await axios.post(
      `${API_URL}/api/auth/logout`,
      {},
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return res.status === 200;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
};

// ---------------- log in ---------------------------

export const loginUser = async (email,password) => {
  
    // const values = {
    //   email,
    //   password
    // };
  try {
    const response = await axios.post(
      `${API_URL}/api/auth`,
    {
      email,
      password
    },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "An error occurred during login" };
  }
};

// -------------- regester ---------------------------
export const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: error.response?.data?.message || "An error occurred during registration" };
    }
  };
