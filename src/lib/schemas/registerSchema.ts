import * as z from 'zod'

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(10, "Password must be 10 characters or more")
})

export type RegisterSchema = z.infer<typeof registerSchema>