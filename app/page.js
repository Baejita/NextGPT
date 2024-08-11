import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">GPTGenius</h1>
          <p className="py-6">
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link
            href="/chat"
            className="btn btn-primary text-base-200 hover:text-base-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
