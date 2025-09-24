'use client';

import { useState } from 'react';
import { type Repository } from '../lib/types';
import { formatDate } from '../lib/utils';
import { X, Search, GitBranch, Lock, Globe, Star } from 'lucide-react';

interface RepositorySelectorProps {
  repositories: Repository[];
  onSelect: (repo: Repository) => void;
  onClose: () => void;
  isLoading: boolean;
}

export function RepositorySelector({ 
  repositories, 
  onSelect, 
  onClose, 
  isLoading 
}: RepositorySelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-text-secondary/10">
          <h2 className="text-lg font-semibold text-text-primary">Select Repository</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-text-secondary/10 rounded-md transition-colors duration-200"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-text-secondary/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input w-full pl-10"
            />
          </div>
        </div>

        {/* Repository List */}
        <div className="overflow-y-auto max-h-96">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-text-secondary">Loading repositories...</p>
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-text-secondary">No repositories found</p>
            </div>
          ) : (
            <div className="divide-y divide-text-secondary/10">
              {filteredRepos.map((repo) => (
                <button
                  key={repo.id}
                  onClick={() => onSelect(repo)}
                  className="w-full p-4 text-left hover:bg-text-secondary/5 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-text-primary">{repo.name}</h3>
                      {repo.private ? (
                        <Lock className="w-3 h-3 text-text-secondary" />
                      ) : (
                        <Globe className="w-3 h-3 text-text-secondary" />
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-text-secondary">
                      <GitBranch className="w-3 h-3" />
                      <span>{repo.default_branch}</span>
                    </div>
                  </div>
                  
                  {repo.description && (
                    <p className="text-sm text-text-secondary mb-2 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <div className="flex items-center space-x-3">
                      {repo.language && (
                        <span className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{repo.language}</span>
                        </span>
                      )}
                    </div>
                    <span>Updated {formatDate(new Date(repo.updated_at))}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-text-secondary/10 bg-background/50">
          <p className="text-xs text-text-secondary text-center">
            Connect your GitHub account to see more repositories
          </p>
        </div>
      </div>
    </div>
  );
}
