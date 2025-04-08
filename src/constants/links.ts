import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "https://blog.repulso.com",
        label: "Blog",
        icon: MegaphoneIcon
    },
    {
        href: "https://chat.repulso.com",
        label: "Chat",
        icon: ChartPieIcon,
    },
    {
        href: "https://companion-ai.repulso.com",
        label: "Companion AI",
        icon: LineChartIcon
    },
    {
        href: "https://course.repulso.com",
        label: "Course",
        icon: MessageSquareTextIcon
    },
    {
        href: "https://gen-ai.repulso.com",
        label: "Engagement",
        icon: UsersIcon
    },
    {
        href: "https://interview.repulso.com",
        label: "AI Generation",
        icon: CreditCardIcon
    },
    {
        href: "https://live-stream.repulso.com",
        label: "Live Stream",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Features", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Contact", href: "/" },
            { name: "Download", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Help Center", href: "/help-center" },
            { name: "Community", href: "/community" },
            { name: "Guides", href: "/guides" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "API Docs", href: "/api-docs" },
            { name: "SDKs", href: "/sdks" },
            { name: "Tools", href: "/tools" },
            { name: "Open Source", href: "/open-source" },
            { name: "Changelog", href: "/changelog" },
        ],
    },
];
