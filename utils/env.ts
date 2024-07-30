import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  skipValidation: process.env.SKIP_ENV_VALIDATION === '1',
  isServer: typeof window === 'undefined',
  server: {
    DATABASE_URL: z.string().min(1),
    PG_USER_DATABASE_URL: z.string().min(1),
    PUSHER_APP_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_PUSHER_APP_KEY: z.string().min(1),
    NEXT_PUBLIC_PUSHER_APP_CLUSTER: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    PG_USER_DATABASE_URL: process.env.PG_USER_DATABASE_URL,
    PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
    NEXT_PUBLIC_PUSHER_APP_KEY: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    NEXT_PUBLIC_PUSHER_APP_CLUSTER: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
