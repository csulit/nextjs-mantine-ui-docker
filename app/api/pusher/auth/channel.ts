import type Pusher from 'pusher';
import pusher from '@/lib/pusher';

export async function POST(request: Request) {
  const data = await request.json();

  const { socket_id, channelName, userId, email, fullName } = data;

  console.log(data);

  const presenceData: Pusher.PresenceChannelData = {
    user_id: userId,
    user_info: {
      userId,
      email,
      fullName,
    },
  };

  const pusherChannelAuth = pusher.authorizeChannel(socket_id, channelName, presenceData);

  return Response.json(pusherChannelAuth);
}
