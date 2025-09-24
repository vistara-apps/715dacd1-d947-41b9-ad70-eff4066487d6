'use client';

import { type Deployment, type DeploymentCardVariant } from '../lib/types';
import { formatRelativeTime, truncateCommitHash, getStatusColor, getStatusBgColor } from '../lib/utils';
import { ExternalLink, GitCommit, Clock, CheckCircle, XCircle, Loader } from 'lucide-react';

interface DeploymentCardProps {
  deployment: Deployment;
  variant: DeploymentCardVariant;
}

export function DeploymentCard({ deployment, variant }: DeploymentCardProps) {
  const getStatusIcon = () => {
    switch (deployment.status) {
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      case 'pending':
      case 'building':
      case 'deploying':
        return <Loader className="w-4 h-4 animate-spin" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = () => {
    switch (deployment.status) {
      case 'success':
        return 'Deployed';
      case 'failed':
        return 'Failed';
      case 'building':
        return 'Building';
      case 'deploying':
        return 'Deploying';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  const repoName = deployment.repoUrl.split('/').pop() || 'Unknown Repository';

  return (
    <div className={`card border ${getStatusBgColor(deployment.status)} animate-slide-up`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-text-primary mb-1">{repoName}</h3>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <GitCommit className="w-3 h-3" />
            <span>{deployment.branch}</span>
            <span>•</span>
            <span>{truncateCommitHash(deployment.commitHash)}</span>
          </div>
        </div>
        
        <div className={`flex items-center space-x-1 text-sm ${getStatusColor(deployment.status)}`}>
          {getStatusIcon()}
          <span>{getStatusText()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">
          {formatRelativeTime(deployment.createdAt)}
        </span>
        
        {deployment.deployedUrl && deployment.status === 'success' && (
          <a
            href={deployment.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <span>View Live</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {deployment.status === 'building' && (
        <div className="mt-3 pt-3 border-t border-text-secondary/10">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Installing dependencies and building...</span>
          </div>
        </div>
      )}

      {deployment.status === 'deploying' && (
        <div className="mt-3 pt-3 border-t border-text-secondary/10">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Deploying to production...</span>
          </div>
        </div>
      )}

      {deployment.errorMessage && deployment.status === 'failed' && (
        <div className="mt-3 pt-3 border-t border-red-400/20">
          <p className="text-sm text-red-400">{deployment.errorMessage}</p>
        </div>
      )}
    </div>
  );
}
