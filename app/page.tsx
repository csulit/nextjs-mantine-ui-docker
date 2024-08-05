import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import DashboardStats from '@/components/DashboardStats/DashboardStats';

export default function HomePage() {
  return (
    <>
      <DashboardStats />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
