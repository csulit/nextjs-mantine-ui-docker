'use client';

import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { User } from '@/interface/user';
import { env } from '@/utils/env';

interface PusherContextProps {
  pusher: Pusher;
}

const extractUser = (user: User): User => ({
  userId: user.userId,
  fullName: user.fullName,
  email: user.email,
});

const PusherContext = createContext<PusherContextProps>({} as PusherContextProps);

const PusherContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const testUser = {
    userId: 111,
    fullName: 'Christian angelo m sulit',
    email: 'christian.sulit@kmc.solutions',
  };
  const [pusher, setPusher] = useState<Pusher | null>(null);

  useEffect(() => {
    if (!pusher) {
      Pusher.logToConsole = true;
      console.log('Triggered pusher connection');
      const newPusher = new Pusher(env.NEXT_PUBLIC_PUSHER_APP_KEY, {
        cluster: env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        userAuthentication: {
          transport: 'ajax',
          endpoint: '/api/pusher/auth/user',
          params: extractUser(testUser),
        },
        channelAuthorization: {
          transport: 'ajax',
          endpoint: '/api/pusher/auth/channel',
          params: extractUser(testUser),
        },
      });

      setPusher(newPusher);
    }
  }, [pusher]);

  if (!pusher) {
    return null;
  }

  return <PusherContext.Provider value={{ pusher }}>{children}</PusherContext.Provider>;
};

const usePusherContext = () => {
  const context = useContext(PusherContext);

  if (!context.pusher) {
    throw new Error('Pusher is not initialized');
  }

  return context;
};

export { PusherContextProvider, usePusherContext };
