import type Pusher from 'pusher';
import pusher from '@/lib/pusher';

export async function POST(request: Request) {
  const data = await request.json();

  const { socket_id, userId, email, fullName } = data;

  console.log(data);

  const presenceData: Pusher.UserChannelData = {
    id: userId,
    user_id: userId,
    user_info: {
      userId,
      email,
      fullName,
    },
  };

  const pusherUserAuth = pusher.authenticateUser(socket_id, presenceData);

  return Response.json(pusherUserAuth);
}
