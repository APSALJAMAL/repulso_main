"use client"

import React from 'react'
import { ArrowDownIcon, MessageSquareIcon } from "lucide-react";
import { ArrowUpIcon, BarChart3Icon, Share2Icon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersIcon } from "lucide-react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ANALYTICS_DATA, RECENT_SALES } from "@/constants/dashboard";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Container } from "@/components";

const chartConfig = {
    reach: {
        label: "Total Reach",
        color: "hsl(var(--chart-1))",
    },
    engagement: {
        label: "Engagement",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const Page = () => {
    return (
        <div className="p-4 w-full">
            <div className="flex flex-col w-full">

                
            </div>
        </div>
    )
};

export default Page
