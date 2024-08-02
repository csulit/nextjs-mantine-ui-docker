import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import PublicLiveChat from '@/components/PublicLiveChat/PublicLiveChat';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <PublicLiveChat />
    </>
  );
}
