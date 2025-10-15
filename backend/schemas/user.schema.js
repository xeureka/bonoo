import * as z from "zod"

export const registerSchema = z.object({
    userId: z.string().min(6).max(6),
    password: z.string().min(6)
})

export const loginSchema = z.object({
    userId: z.string().min(6).max(6),
    password: z.string().min(6)
})