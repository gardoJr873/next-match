import * as z from "zod";


// Defining a Zod Schema
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(10, "Password must be 10 characters or more")
})

/**
 *
 * used within conditional types to infer a new type variable from another type
 * to extract and utilize specific subtypes or properties during type checking,
 * enhancing the expressiveness and flexibility of TypeScript's type system
 *
 * */
export type LoginSchema = z.infer<typeof loginSchema>