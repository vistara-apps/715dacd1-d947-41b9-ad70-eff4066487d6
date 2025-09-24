import { AppShell } from '../components/AppShell';
import { DeploymentDashboard } from '../components/DeploymentDashboard';

export default function HomePage() {
  return (
    <AppShell>
      <DeploymentDashboard />
    </AppShell>
  );
}
