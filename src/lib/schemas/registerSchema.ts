import * as z from 'zod'

// Defining zod schema for registration
export const registerSchema = z.object({
  name: z.string()
    .min(3, 'Name must be 3 characters or more'),
  email: z.string()
    .email("Please enter a valid email address."),
  password: z.string()
    .min(10, "Password must be 10 characters or more")
})

/**
 *
 * used within conditional types to infer a new type variable from another type
 * to extract and utilize specific subtypes or properties during type checking,
 * enhancing the expressiveness and flexibility of TypeScript's type system
 *
 * */
export type RegisterSchema = z.infer<typeof registerSchema>