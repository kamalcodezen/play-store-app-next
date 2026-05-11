"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, text }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`font-semibold pb-2  ${pathname === href ? "text-purple-500 border-b border-purple-500" : ""}`}
    >
      {text}
    </Link>
  );
};

export default MyNavLink;
