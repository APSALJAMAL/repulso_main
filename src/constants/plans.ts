type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
      id: "free",
      title: "Free",
      desc: "Get started with essential tools for building your AI-powered business environment",
      monthlyPrice: 0,
      yearlyPrice: 0,
      buttonText: "Get Started",
      features: [
        "Basic AI modules",
        "Core integrations",
        "Community support",
        "1 workspace limit",
        "Standard analytics dashboard",
        "Basic automation tools"
      ],
      link: "https://stripe.com/free-plan-link"
    },
    {
      id: "pro",
      title: "Pro",
      desc: "Unlock advanced features for scaling your AI-driven operations",
      monthlyPrice: 10,
      yearlyPrice: 120,
      badge: "Most Popular",
      buttonText: "Upgrade to Pro",
      features: [
        "Advanced AI modules",
        "Extended app integrations",
        "Priority email support",
        "10 workspace limit",
        "Enhanced analytics & insights",
        "Workflow automation",
        "Team collaboration tools",
        "Custom branding options"
      ],
      link: "https://stripe.com/pro-plan-link"
    },
    {
      id: "enterprise",
      title: "Enterprise",
      desc: "Tailored AI solutions for enterprises and large-scale operations",
      monthlyPrice: 15,
      yearlyPrice: 180,
      badge: "Contact Sales",
      buttonText: "Upgrade to Enterprise",
      features: [
        "Unlimited AI environments",
        "Full suite of integrations",
        "Dedicated account manager",
        "Unlimited workspaces",
        "Custom analytics & reporting",
        "Enterprise-grade security",
        "Ongoing updates & optimizations"
        // "24/7 priority support"
      ],
      link: "https://stripe.com/enterprise-plan-link"
    }
  ];
  