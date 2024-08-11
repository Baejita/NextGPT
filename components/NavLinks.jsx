import Link from "next/link";
import React from "react";

const links = [
  { href: "/chat", lebel: "chat" },
  { href: "/tours", lebel: "tours" },
  { href: "/tours/new-tour", lebel: "new-tour" },
  { href: "/profile", lebel: "profile" },
];

const NavLinks = () => {
  return (
    <div>
      <ul className=" menu text-base-content ">
        {/* Sidebar content here */}
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link className="capitalize" href={link.href}>
                {link.lebel}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
