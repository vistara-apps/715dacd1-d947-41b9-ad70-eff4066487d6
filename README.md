# DeployKit - Base Mini App

Deploy your Farcaster DApp with zero hassle. A Base MiniApp for Farcaster users to easily deploy their web applications with one-click to production.

## Features

- **One-Click Deployment**: Automates the entire build, push, and deploy process to a production-ready environment
- **Real-time Monitoring & Alerts**: Provides immediate notifications for application errors or performance degradations
- **Automated Scaling**: Dynamically adjusts server resources based on incoming traffic
- **GitHub Integration**: Connect your repositories and deploy directly from your codebase
- **Farcaster Native**: Built specifically for the Farcaster ecosystem with social-native UX

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MiniKit API key
- OnchainKit API key
- GitHub OAuth application (for repository access)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/deploykit.git
cd deploykit
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your API keys and configuration:
- `NEXT_PUBLIC_MINIKIT_API_KEY`: Your MiniKit API key
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key  
- `NEXT_PUBLIC_GITHUB_CLIENT_ID`: GitHub OAuth client ID

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

### Data Model

**User**
- `farcasterId`: Unique Farcaster identifier
- `connectedRepoUrl`: Connected GitHub repository URL
- `deploymentStatus`: Current deployment status

**Deployment**
- `userId`: Reference to user
- `repoUrl`: GitHub repository URL
- `branch`: Git branch being deployed
- `commitHash`: Specific commit hash
- `status`: Deployment status (pending, building, deploying, success, failed)
- `deployedUrl`: Live application URL

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: Base network integration via OnchainKit
- **Authentication**: MiniKit for Farcaster integration
- **TypeScript**: Full type safety throughout

### Design System

- **Colors**: Dark theme with accent colors
  - Background: `hsl(230, 20%, 10%)`
  - Surface: `hsl(230, 20%, 15%)`
  - Accent: `hsl(90, 90%, 60%)`
  - Primary: `hsl(200, 90%, 50%)`

- **Components**: Modular, reusable components with variants
- **Motion**: Smooth animations with cubic-bezier easing
- **Responsive**: Mobile-first design approach

## Usage

### For Developers

1. **Connect Farcaster Account**: Sign in with your Farcaster account
2. **Connect GitHub**: Authorize access to your repositories
3. **Select Repository**: Choose the repository you want to deploy
4. **Deploy**: Click deploy and watch your app go live
5. **Monitor**: Track deployment status and performance

### Pricing

- **Free Tier**: 1 deployment per week
- **Paid Deployments**: $1 per additional deployment
- **Features**: All deployments include monitoring and auto-scaling

## API Integration

### Required APIs

1. **Farcaster Hub API**: User identity and authentication
2. **GitHub API**: Repository access and webhook management
3. **Base Network**: Blockchain interactions for DApps

### Webhooks

The app supports webhooks for:
- Deployment status updates
- Build completion notifications
- Error alerts
- Performance monitoring

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@deploykit.app or join our [Discord community](https://discord.gg/deploykit).

## Roadmap

- [ ] Advanced CI/CD pipeline integration
- [ ] Custom domain support
- [ ] Team collaboration features
- [ ] Advanced monitoring and analytics
- [ ] Multi-cloud deployment options
- [ ] Smart contract deployment automation
