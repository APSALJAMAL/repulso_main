import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();

  if (!user) {
    return <div>No user found (not signed in)</div>;
  }

  let existingUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (!existingUser) {
    try {
      existingUser = await prisma.user.create({
        data: {
          name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
          avatar: user.imageUrl,
        },
      });
    } catch (err) {
      console.error("Failed to create user:", err);
      return <div>Failed to create user</div>;
    }
  }

  if (!existingUser) {
    return <div>Could not fetch or create user.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
    <div className="p-6 w-full max-w-xl rounded-xl shadow-2xl ">
      <div className="flex flex-col items-center w-full gap-6">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          👋 Welcome, {existingUser.name ?? "Guest"}
        </h1>
  
        <img
          src={existingUser.avatar ?? "/default-avatar.png"}
          alt={existingUser.name ?? "User Avatar"}
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />
  
        <div className="mt-4 w-full space-y-3 text-white backdrop-blur-sm p-4 rounded-lg shadow-inner ">
          <p><span className="font-bold">🆔 ID:</span> {existingUser.id}</p>
          <p><span className="font-bold">📧 Email:</span> {existingUser.email}</p>
          <p><span className="font-bold">🆔 Clerk ID:</span> {existingUser.clerkId}</p>
          <p><span className="font-bold">🔐 Role:</span> <span className="capitalize text-purple-400">{existingUser.role}</span></p>
          <p><span className="font-bold">🕓 Created:</span> {existingUser.createdAt.toLocaleString()}</p>
          <p><span className="font-bold">🔄 Updated:</span> {existingUser.updatedAt.toLocaleString()}</p>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Page;
