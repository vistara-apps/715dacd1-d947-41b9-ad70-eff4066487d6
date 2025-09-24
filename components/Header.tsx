'use client';

import { useMiniKit } from '@coinbase/minikit';
import { useAuthenticate } from '@coinbase/onchainkit/minikit';
import { Rocket, User } from 'lucide-react';

export function Header() {
  const { context } = useMiniKit();
  const { user } = useAuthenticate();

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
            {user || context?.user ? (
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-text-primary">
                  {context?.user?.displayName || 'Connected'}
                </span>
              </div>
            ) : (
              <div className="text-sm text-text-secondary">
                Not connected
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
