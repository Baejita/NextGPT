import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div>
      <ul className="">
        {/* Sidebar content here */}

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
    </div>
  );
};

export default NavLinks;
