import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.string().default('4000'),
    DB_HOST: z.string().default('localhost'),
    DB_PORT: z.string().default('3306'),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    JWT_SECRET: z.string().min(10),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error('Invalid environment variables:', parsed.error.format());
    process.exit(1);
}

export const env = parsed.data;