'use client';

import { useState, useEffect } from 'react';
// import { useMiniKit, useAuthenticate } from '@coinbase/onchainkit';
import { ConnectWallet } from './ConnectWallet';
import { RepositorySelector } from './RepositorySelector';
import { DeploymentCard } from './DeploymentCard';
import { DeploymentStats } from './DeploymentStats';
import { type Deployment, type Repository } from '../lib/types';
import { Plus, GitBranch } from 'lucide-react';

export function DeploymentDashboard() {
  // const { context } = useMiniKit();
  // const { user } = useAuthenticate();
  const [deployments, setDeployments] = useState<Deployment[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [showRepoSelector, setShowRepoSelector] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    // Simulate loading deployments
    const mockDeployments: Deployment[] = [
      {
        id: '1',
        userId: 'user1',
        repoUrl: 'https://github.com/user/my-dapp',
        branch: 'main',
        commitHash: 'abc123def456',
        status: 'success',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        deployedUrl: 'https://my-dapp-abc123.deploykit.app',
      },
      {
        id: '2',
        userId: 'user1',
        repoUrl: 'https://github.com/user/another-app',
        branch: 'main',
        commitHash: 'def456ghi789',
        status: 'pending',
        createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      },
    ];
    setDeployments(mockDeployments);

    // Simulate loading repositories
    const mockRepos: Repository[] = [
      {
        id: 1,
        name: 'my-dapp',
        full_name: 'user/my-dapp',
        description: 'A decentralized application built with Next.js',
        html_url: 'https://github.com/user/my-dapp',
        clone_url: 'https://github.com/user/my-dapp.git',
        default_branch: 'main',
        updated_at: '2024-01-15T10:30:00Z',
        language: 'TypeScript',
        private: false,
      },
      {
        id: 2,
        name: 'another-app',
        full_name: 'user/another-app',
        description: 'React application with Web3 integration',
        html_url: 'https://github.com/user/another-app',
        clone_url: 'https://github.com/user/another-app.git',
        default_branch: 'main',
        updated_at: '2024-01-14T15:45:00Z',
        language: 'JavaScript',
        private: false,
      },
    ];
    setRepositories(mockRepos);
  }, []);

  const handleDeploy = async (repo: Repository) => {
    if (!repo) return;

    setIsDeploying(true);
    setShowRepoSelector(false);

    try {
      // Create new deployment
      const newDeployment: Deployment = {
        id: Date.now().toString(),
        userId: 'user1',
        repoUrl: repo.html_url,
        branch: repo.default_branch,
        commitHash: Math.random().toString(36).substring(2, 15),
        status: 'pending',
        createdAt: new Date(),
      };

      setDeployments(prev => [newDeployment, ...prev]);

      // Simulate deployment process
      setTimeout(() => {
        setDeployments(prev => 
          prev.map(d => 
            d.id === newDeployment.id 
              ? { ...d, status: 'building' as const }
              : d
          )
        );
      }, 2000);

      setTimeout(() => {
        setDeployments(prev => 
          prev.map(d => 
            d.id === newDeployment.id 
              ? { 
                  ...d, 
                  status: 'success' as const,
                  deployedUrl: `https://${repo.name}-${newDeployment.commitHash.substring(0, 6)}.deploykit.app`
                }
              : d
          )
        );
        setIsDeploying(false);
      }, 8000);

    } catch (error) {
      console.error('Deployment failed:', error);
      setIsDeploying(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Section */}
      <DeploymentStats 
        totalDeployments={deployments.length}
        successfulDeployments={deployments.filter(d => d.status === 'success').length}
        failedDeployments={deployments.filter(d => d.status === 'failed').length}
        deploymentsThisWeek={1}
        freeDeploymentsRemaining={0}
      />

      {/* Quick Deploy Section */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-text-primary">Quick Deploy</h2>
          <GitBranch className="w-5 h-5 text-text-secondary" />
        </div>
        
        <p className="text-text-secondary mb-4">
          Deploy your repository with one click. Connect your GitHub account to get started.
        </p>

        <button
          onClick={() => setShowRepoSelector(true)}
          disabled={isDeploying}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>{isDeploying ? 'Deploying...' : 'New Deployment'}</span>
        </button>
      </div>

      {/* Repository Selector Modal */}
      {showRepoSelector && (
        <RepositorySelector
          repositories={repositories}
          onSelect={handleDeploy}
          onClose={() => setShowRepoSelector(false)}
          isLoading={false}
        />
      )}

      {/* Recent Deployments */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Recent Deployments</h2>
        
        {deployments.length === 0 ? (
          <div className="card text-center py-8">
            <p className="text-text-secondary mb-4">No deployments yet</p>
            <p className="text-sm text-text-secondary">
              Deploy your first application to get started
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {deployments.map((deployment) => (
              <DeploymentCard
                key={deployment.id}
                deployment={deployment}
                variant={deployment.status === 'success' ? 'success' : 
                        deployment.status === 'failed' ? 'failed' : 'pending'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
