import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "username is required"
    }),
    email: z.string({
        required_error: "email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "username is required"
    }).min({
        message: "password must be at 6 characters"
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "email is required"
    }).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "username is required"
    }).min({
        message: "password must be at 6 characters"
    })
});