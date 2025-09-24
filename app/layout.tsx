import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeployKit - Deploy your Farcaster DApp with zero hassle',
  description: 'A Base MiniApp for Farcaster users to easily deploy their web applications with one-click to production.',
  openGraph: {
    title: 'DeployKit',
    description: 'Deploy your Farcaster DApp with zero hassle.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeployKit',
    description: 'Deploy your Farcaster DApp with zero hassle.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen bg-background">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
