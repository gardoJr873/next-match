import * as z from "zod";


// Defining a Zod Schema
export const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(10, "Password must be 10 characters or more")
})

// Inferring Type
export type LoginSchema = z.infer<typeof loginSchema>