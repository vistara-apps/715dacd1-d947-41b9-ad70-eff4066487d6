export interface User {
  id: string;
  farcasterId: string;
  connectedRepoUrl?: string;
  deploymentStatus: 'idle' | 'deploying' | 'deployed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Deployment {
  id: string;
  userId: string;
  repoUrl: string;
  branch: string;
  commitHash: string;
  status: 'pending' | 'building' | 'deploying' | 'success' | 'failed';
  createdAt: Date;
  deployedUrl?: string;
  buildLogs?: string[];
  errorMessage?: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description?: string;
  html_url: string;
  clone_url: string;
  default_branch: string;
  updated_at: string;
  language?: string;
  private: boolean;
}

export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  email?: string;
}

export interface DeploymentStats {
  totalDeployments: number;
  successfulDeployments: number;
  failedDeployments: number;
  deploymentsThisWeek: number;
  freeDeploymentsRemaining: number;
}

export type DeploymentCardVariant = 'success' | 'pending' | 'failed';
export type ActionInputVariant = 'text' | 'button';
