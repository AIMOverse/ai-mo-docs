import { defineConfig } from "vocs";

export default defineConfig({
  title: "AiMo Network Documentation",
  description:
    "Documentation for the AiMo Network - Decentralized Intelligence Marketplace under permissionless unified API",
  baseUrl: "https://docs.aimo.network",
  topNav: [
    {
      text: "Overview",
      link: "/overview",
    },
    {
      text: "User Guide",
      link: "/user-guide",
    },
    {
      text: "Provider Guide",
      link: "/provider-guide",
    },
    {
      text: "Community",
      link: "/community",
    },
  ],
  sidebar: [
    {
      text: "Overview",
      items: [
        {
          text: "Quick Start",
          link: "/overview",
        },
        {
          text: "FAQ",
          link: "/overview/faq",
        },
        {
          text: "Principles",
          link: "/overview/principles",
        },
        {
          text: "What's Next",
          link: "/overview/whats-next",
        },
      ],
    },
    {
      text: "Features",
      items: [
        {
          text: "Privacy & Logging",
          link: "/features/privacy-and-logging",
        },
        {
          text: "Provider Routing",
          link: "/features/provider-routing",
        },
        {
          text: "Multi Modal",
          link: "/features/multi-modal",
        },
        {
          text: "Zero Completion Insurance",
          link: "/features/zero-completion-insurance",
        },
        {
          text: "Uptime Optimization",
          link: "/features/uptime-optimization",
        },
      ],
    },
    {
      text: "User Guide",
      items: [
        {
          text: "Quick Start",
          link: "/user-guide",
        },
        {
          text: "Authentication",
          link: "/user-guide/authentication",
        },
        {
          text: "API Usage",
          link: "/user-guide/api-usage",
        },
        {
          text: "X402 Payments",
          link: "/user-guide/x402-payments",
        },
        {
          text: "Payments",
          link: "/user-guide/payments",
        },
        {
          text: "Streaming",
          link: "/user-guide/streaming",
        },
        {
          text: "Error Handling",
          link: "/user-guide/error-handling",
        },
        {
          text: "Support",
          link: "/user-guide/support",
        },
      ],
    },
    {
      text: "Provider Guide",
      items: [
        {
          text: "Quick Start",
          link: "/provider-guide",
        },
        // {
        //   text: 'Service Registration',
        //   link: '/provider-guide/registration',
        // },
        // {
        //   text: 'Service Integration',
        //   link: '/provider-guide/service-integration',
        // },
        // {
        //   text: 'Proxy Features',
        //   link: '/provider-guide/proxy-features',
        // },
        // {
        //   text: 'Payment Integration',
        //   link: '/provider-guide/payments',
        // },
        // {
        //   text: 'API Examples',
        //   link: '/provider-guide/api-examples',
        // },
        {
          text: "Deployment",
          link: "/provider-guide/deployment",
        },
        // {
        //   text: 'Pricing',
        //   link: '/provider-guide/pricing',
        // },
        // {
        //   text: 'Troubleshooting',
        //   link: '/provider-guide/troubleshooting',
        // },
        // {
        //   text: 'Security',
        //   link: '/provider-guide/security',
        // },
      ],
    },
    {
      text: "Integrations",
      items: [
        {
          text: "Quick Start",
          link: "/integrations",
        },
        {
          text: "Amico Framework",
          link: "/integrations/amico-framework",
        },
        {
          text: "Cherry Studio",
          link: "/integrations/cherry-studio",
        },
        {
          text: "Vercel AI SDK",
          link: "/integrations/vercel-ai-sdk",
        },
        {
          text: "OpenAI SDK",
          link: "/integrations/openai-sdk",
        },
        {
          text: "LangChain",
          link: "/integrations/langchain",
        },
        {
          text: "PydanticAI",
          link: "/integrations/pydantic-ai",
        },
        {
          text: "Solana Agent Kit",
          link: "/integrations/solana-agent-kit",
        },
        {
          text: "Base Agent Kit",
          link: "/integrations/base-agent-kit",
        },
      ],
    },
    {
      text: "API Reference",
      items: [
        {
          text: "Overview",
          link: "/api-reference",
        },
        {
          text: "Chat Completion",
          link: "/api-reference/chat-completion",
        },
        {
          text: "List Models",
          link: "/api-reference/list-models",
        },
      ],
    },
    {
      text: "Community",
      items: [
        {
          text: "Blog",
          link: "https://aimo.network/blog",
        },
        {
          text: "Twitter/X",
          link: "https://x.com/AiMoNetwork",
        },
        {
          text: "Discord",
          link: "https://discord.gg/MkeG9Zwuaw",
        },
        {
          text: "Github",
          link: "https://github.com/AIMOverse",
        },
        {
          text: "Ecosystem",
          link: "https://aimo.network/ecosystem",
        },
        {
          text: "Careers",
          link: "https://aimo.network/careers",
        },
        {
          text: "Privacy Policy",
          link: "https://aimo.network/privacy-policy",
        },
        {
          text: "Terms of Service",
          link: "https://aimo.network/terms-of-service",
        },
        {
          text: "Contact Us",
          link: "mailto:kelsenliu@aimo.network",
        },
      ],
    },
  ],
});
