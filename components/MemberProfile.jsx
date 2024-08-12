import { UserButton } from "@clerk/nextjs";
// auth and currentUser are now imported from /server
import { auth, currentUser } from "@clerk/nextjs/server";
const MemberProfile = async () => {
  const user = await currentUser();
  // const { userId } = await auth();

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <p className="text-sm px-4">{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};
export default MemberProfile;
