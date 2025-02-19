import z from 'zod'

// Zod schema for validation
export const signUpUserForm = z.object({
    password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
});
  

export const signInUserForm = z.object({
  password: z
  .string()
  .min(8, "Password must be at least 8 characters"),
  email: z.string().email("Invalid email address"),
});


const RequistUserForm = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" })
  .max(50, "Name must be at most 50 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  gender: z.enum(["male", "female"], { required_error: "Please select your gender" }),
  caseType: z.string().min(2, { message: "Case type must be at least 2 characters" })
  .max(30, "Name must be at most 30 characters"),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  date: z.string().refine((date) => date >= new Date(), {
    message: "Schedule date cannot be in the past",
  }),
  time: z.string().nonempty({ message: "Please select a time" }),
});
