import { z } from 'zod';
import { chatSchema } from '@/schema/chat.schema';

export type Chat = z.infer<typeof chatSchema>;
