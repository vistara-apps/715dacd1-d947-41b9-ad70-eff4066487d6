'use client';

import { type DeploymentStats as DeploymentStatsType } from '../lib/types';
import { BarChart3, CheckCircle, XCircle, Zap, Gift } from 'lucide-react';

interface DeploymentStatsProps extends DeploymentStatsType {}

export function DeploymentStats({
  totalDeployments,
  successfulDeployments,
  failedDeployments,
  deploymentsThisWeek,
  freeDeploymentsRemaining,
}: DeploymentStatsProps) {
  const successRate = totalDeployments > 0 
    ? Math.round((successfulDeployments / totalDeployments) * 100)
    : 0;

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Total Deployments */}
      <div className="card">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-md">
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text-primary">{totalDeployments}</p>
            <p className="text-sm text-text-secondary">Total Deployments</p>
          </div>
        </div>
      </div>

      {/* Success Rate */}
      <div className="card">
        <div className="flex items-center space-x-3">
          <div className="bg-accent/10 p-2 rounded-md">
            <CheckCircle className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text-primary">{successRate}%</p>
            <p className="text-sm text-text-secondary">Success Rate</p>
          </div>
        </div>
      </div>

      {/* This Week */}
      <div className="card">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-md">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text-primary">{deploymentsThisWeek}</p>
            <p className="text-sm text-text-secondary">This Week</p>
          </div>
        </div>
      </div>

      {/* Free Remaining */}
      <div className="card">
        <div className="flex items-center space-x-3">
          <div className="bg-accent/10 p-2 rounded-md">
            <Gift className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text-primary">{freeDeploymentsRemaining}</p>
            <p className="text-sm text-text-secondary">Free Left</p>
          </div>
        </div>
      </div>
    </div>
  );
}
