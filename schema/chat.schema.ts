import { z } from 'zod';

export const chatSchema = z.object({
  id: z.string(),
  status: z.string(),
  visitor: z.string(),
  agent: z.string(),
  browser: z.string(),
  time: z.string(),
});
