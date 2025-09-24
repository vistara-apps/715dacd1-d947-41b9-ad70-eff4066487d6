'use client';

// import { useMiniKit, useAuthenticate } from '@coinbase/onchainkit';
import { Rocket, User } from 'lucide-react';

export function Header() {
  // const { context } = useMiniKit();
  // const { user } = useAuthenticate();

  return (
    <header className="bg-surface border-b border-text-secondary/10">
      <div className="container mx-auto max-w-lg px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-accent/10 p-2 rounded-md">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">DeployKit</h1>
              <p className="text-sm text-text-secondary">Zero hassle deployments</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-sm text-text-secondary">
              Not connected
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
