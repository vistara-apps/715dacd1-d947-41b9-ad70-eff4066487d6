'use client';

import { ReactNode } from 'react';
import { Header } from './Header';
import { cn } from '../lib/utils';

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Header />
      <main className="container mx-auto max-w-lg px-4 py-6">
        {children}
      </main>
    </div>
  );
}
