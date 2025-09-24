'use client';

import { useMiniKit } from '@coinbase/minikit';
import { Wallet, Zap, Shield, Rocket } from 'lucide-react';

export function ConnectWallet() {
  const { context } = useMiniKit();

  const handleConnect = async () => {
    try {
      // In a real implementation, this would trigger the MiniKit authentication flow
      console.log('Connecting wallet...');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-8">
        <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Rocket className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Welcome to DeployKit
        </h1>
        <p className="text-text-secondary text-lg">
          Deploy your Farcaster DApp with zero hassle
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-4">
        <div className="card">
          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 p-2 rounded-md flex-shrink-0">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-1">One-Click Deployment</h3>
              <p className="text-sm text-text-secondary">
                Deploy directly from your GitHub repository in minutes, not hours.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start space-x-3">
            <div className="bg-accent/10 p-2 rounded-md flex-shrink-0">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Real-time Monitoring</h3>
              <p className="text-sm text-text-secondary">
                Get instant notifications about your app's performance and issues.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 p-2 rounded-md flex-shrink-0">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Auto Scaling</h3>
              <p className="text-sm text-text-secondary">
                Your app automatically scales with traffic, ensuring great performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="card text-center">
        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Wallet className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Connect Your Farcaster Account
        </h2>
        <p className="text-text-secondary mb-6">
          Sign in with your Farcaster account to start deploying your applications.
        </p>
        
        <button
          onClick={handleConnect}
          className="btn-primary w-full"
        >
          Connect Farcaster
        </button>
        
        <p className="text-xs text-text-secondary mt-4">
          Free tier includes 1 deployment per week. Additional deployments are $1 each.
        </p>
      </div>
    </div>
  );
}
