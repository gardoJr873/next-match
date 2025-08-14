/**
 *
 * This is where you can control the behaviour of the library
 * and specify custom authentication logic, adapters, etc.
 *
 * */

import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: []
})