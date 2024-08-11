import { SignIn } from "@clerk/nextjs";

const SignedIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SignedIn;
