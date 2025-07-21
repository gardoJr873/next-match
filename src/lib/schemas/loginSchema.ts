import * as z from "zod";


// Defining a Zod Schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10).regex(/^[a-z]+$/)
})

// Inferring Type
export type LoginSchema = z.infer<typeof loginSchema>