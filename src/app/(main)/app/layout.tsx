import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import React from 'react';

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";


interface Props {
    children: React.ReactNode;
}

const DashboardLayout =async ({ children }: Props) => {
    const user = await currentUser();

  if (!user) {
    return null;
  }

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (!existingUser) {
    await prisma.user.create({
        data: {
          name: `${user.firstName ?? ""} ${user.lastName ?? ""}`,
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          avatar: user.imageUrl,
        },
      });
      
  }
    return (
        <div className="flex flex-col min-h-screen w-full">
            <DashboardNavbar />
            <main className="flex flex-col lg:flex-row flex-1 size-full">
                <DashboardSidebar />
                <div className="w-full pt-14 lg:ml-72">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;