import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import PublicLiveChat from '@/components/PublicLiveChat/PublicLiveChat';
import { BasicAppShell } from '@/components/AppShell/AppShell';

export default function HomePage() {
  return (
    <BasicAppShell>
      <Welcome />
      <ColorSchemeToggle />
      <PublicLiveChat />
    </BasicAppShell>
  );
}
