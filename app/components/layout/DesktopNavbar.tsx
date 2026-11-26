
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Goal, ArrowUpRight } from "lucide-react";

const Links = [
  { name: "Home", href: "/" },
  { name: "Fields", href: "/fushat" },
  { name: "About Us", href: "/rreth-nesh" },
  { name: "Contact", href: "/kontakt" },
];

export default function DesktopNavbar() {
  const pathname = usePathname();

  
return (
  <div className="w-full bg-gradient-to-r from-[#202734] via-[#293D40] to-[#295540]">
    <nav className="hidden h-20 w-full max-w-7xl mx-auto items-center justify-between px-5 lg:px-8 md:flex">

      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center  bg-[#B7D894]">
          <Goal className="h-6 w-6 text-[#202734]" />
        </div>

        <span className="text-2xl font-extrabold text-white">
          Pitch<span className="text-[#B7D894]">Book</span>
        </span>
      </Link>

      <div className="flex items-center gap-8">
        {Links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                active
                  ? "text-[#B7D894]"
                  : "text-slate-300 hover:text-[#B7D894]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <Link
        href="/fushat"
        className="inline-flex items-center gap-2  bg-[#B7D894] px-5 py-3 text-sm font-bold text-[#202734] transition-all hover:bg-[#E0F8C7]"
      >
        Book a court
        <ArrowUpRight size={18} />
      </Link>

    </nav>
  </div>
);
}