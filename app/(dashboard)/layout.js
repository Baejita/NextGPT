import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/chat">Chat</Link>
        </li>

        <li>
          <Link href="/tours">Tours</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
}
