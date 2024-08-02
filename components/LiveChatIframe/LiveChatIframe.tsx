import Iframe from 'react-iframe';
import { useColorScheme, useMediaQuery, useViewportSize } from '@mantine/hooks';
import { env } from '@/utils/env';

interface LiveChatIframeProps {
  open: boolean;
}

export function LiveChatIframe({ open }: LiveChatIframeProps) {
  const { height: viewportHeight, width: viewportWidth } = useViewportSize();
  const colorScheme = useColorScheme();
  const isBigScreen = useMediaQuery('(min-width: 640px)');

  return (
    <Iframe
      scrolling="no"
      loading="eager"
      allowFullScreen
      id="kmc-live-chat-pop-up"
      url={`${env.NEXT_PUBLIC_APP_URL}/public/livechat`}
      width={!isBigScreen ? `${viewportWidth}px` : '400px'}
      height={!isBigScreen ? `${viewportHeight - 5}px` : '560px'}
      styles={{
        display: open ? 'block' : 'none',
        border: 'none',
        borderRadius: 16,
        boxShadow: `0 4px 8px ${colorScheme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.5)'}`,
      }}
    />
  );
}
