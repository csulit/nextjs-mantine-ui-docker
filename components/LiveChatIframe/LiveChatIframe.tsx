import Iframe from 'react-iframe';
import { useColorScheme, useMediaQuery, useViewportSize } from '@mantine/hooks';
import { env } from '@/utils/env';

interface LiveChatIframeProps {
  open: boolean;
}

export function LiveChatIframe({ open }: LiveChatIframeProps) {
  const colorScheme = useColorScheme();
  const isBigScreen = useMediaQuery('(min-width: 640px)');
  const { height: viewportHeight, width: viewportWidth } = useViewportSize();

  const getIframeWidth = () => (!isBigScreen ? `${viewportWidth - 20}px` : '400px');
  const getIframeHeight = () =>
    !isBigScreen ? `${viewportHeight - 100}px` : `${viewportHeight - viewportHeight * 0.3}px`;
  const getBoxShadow = () =>
    `0 4px 8px ${colorScheme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.5)'}`;

  return (
    <Iframe
      scrolling="no"
      loading="eager"
      allowFullScreen
      id="kmc-live-chat-pop-up"
      url={`${env.NEXT_PUBLIC_APP_URL}/public/livechat`}
      width={getIframeWidth()}
      height={getIframeHeight()}
      styles={{
        display: open ? 'block' : 'none',
        border: 'none',
        borderRadius: 16,
        boxShadow: getBoxShadow(),
      }}
    />
  );
}
