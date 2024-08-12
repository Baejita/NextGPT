import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const page = () => {
  return (
    <>
      <UserProfile routing="hash" />
    </>
  );
};
export default page;
