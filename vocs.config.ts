import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'AiMo Network Documentation',
  description: 'Documentation for the AiMo Network - Decentralized Intelligence Marketplace under permissionless unified API',
  baseUrl: 'https://docs.aimo.network',
  topNav:[
    {
      text: 'Overview',
      link: '/overview',
    },
    {
      text: 'User Guide',
      link: '/user-guide',
    },
    {
      text: 'Provider Guide',
      link: '/provider-guide', 
    },
    {
      text: 'Community',
      link: '/community',
    },
  ],
  sidebar: [
    {
      text: 'Overview',
      items: [
        {
          text: 'Quick Start',
          link: '/overview'
        },
        {
          text: 'FAQ',
          link: '/overview/faq',
        },
        {
          text: 'Principles',
          link: '/overview/principles',
        },
        {
          text: 'Key Features',
          link: '/overview/features',
        },
        {
          text: 'What\'s Next',
          link: '/overview/whats-next',
        },
      ],
    },
    {
      text: 'User Guide',
      items: [
        {
          text: 'Quick Start',
          link: '/user-guide'
        },
        {
          text: 'Authentication',
          link: '/user-guide/authentication',
        },
        {
          text: 'API Usage',
          link: '/user-guide/api-usage',
        },
        {
          text: 'Payments',
          link: '/user-guide/payments',
        },
        {
          text: 'Streaming',
          link: '/user-guide/streaming',
        },
        {
          text: 'Error Handling',
          link: '/user-guide/error-handling',
        },
        {
          text: 'Integrations',
          link: '/user-guide/integrations',
        },
        {
          text: 'Support',
          link: '/user-guide/support',
        },
      ],
    },
    {
      text: 'Provider Guide',
      items: [
        {
          text: 'Quick Start',
          link: '/provider-guide'
        },
        {
          text: 'Service Registration',
          link: '/provider-guide/registration',
        },
        {
          text: 'Service Integration',
          link: '/provider-guide/service-integration',
        },
        {
          text: 'Proxy Features',
          link: '/provider-guide/proxy-features',
        },
        {
          text: 'Payment Integration',
          link: '/provider-guide/payments',
        },
        {
          text: 'API Examples',
          link: '/provider-guide/api-examples',
        },
        {
          text: 'Deployment',
          link: '/provider-guide/deployment',
        },
        {
          text: 'Pricing',
          link: '/provider-guide/pricing',
        },
        {
          text: 'Troubleshooting',
          link: '/provider-guide/troubleshooting',
        },
        {
          text: 'Security',
          link: '/provider-guide/security',
        },
      ],
    },
    {
      text: 'Community',
      items: [
        {
          text: 'Contributor guide',
          link: '/community'
        },
        {
          text: 'Release Note',
          link: '/community/release-note'
        },
        {
          text: 'Blog',
          link: 'https://aimo.network/blog'
        },
        {
          text: 'Twitter/X',
          link: 'https://x.com/AiMoNetwork'
        },
        {
          text: 'Discord',
          link: 'https://discord.gg/MkeG9Zwuaw'
        }
      ],
    },
  ],
})
