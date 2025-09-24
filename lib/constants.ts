export const DEPLOYMENT_STATUSES = {
  PENDING: 'pending',
  BUILDING: 'building',
  DEPLOYING: 'deploying',
  SUCCESS: 'success',
  FAILED: 'failed',
} as const;

export const USER_DEPLOYMENT_STATUSES = {
  IDLE: 'idle',
  DEPLOYING: 'deploying',
  DEPLOYED: 'deployed',
  FAILED: 'failed',
} as const;

export const PRICING = {
  FREE_DEPLOYMENTS_PER_WEEK: 1,
  DEPLOYMENT_COST: 1, // $1 per deployment
  CURRENCY: 'USD',
} as const;

export const GITHUB_CONFIG = {
  CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
  REDIRECT_URI: process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI || '',
  SCOPES: 'repo,user:email',
} as const;

export const API_ENDPOINTS = {
  GITHUB_API: 'https://api.github.com',
  GITHUB_OAUTH: 'https://github.com/login/oauth/authorize',
} as const;

export const SUPPORTED_FRAMEWORKS = [
  'Next.js',
  'React',
  'Vue.js',
  'Nuxt.js',
  'Svelte',
  'SvelteKit',
  'Astro',
  'Remix',
  'Vite',
  'Static HTML',
] as const;

export const BUILD_COMMANDS = {
  'Next.js': 'npm run build',
  'React': 'npm run build',
  'Vue.js': 'npm run build',
  'Nuxt.js': 'npm run build',
  'Svelte': 'npm run build',
  'SvelteKit': 'npm run build',
  'Astro': 'npm run build',
  'Remix': 'npm run build',
  'Vite': 'npm run build',
  'Static HTML': 'echo "No build step required"',
} as const;
