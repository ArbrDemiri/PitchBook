
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Goal, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Kryefaqja", href: "/" },
  { name: "Fushat", href: "/fushat" },
  { name: "Rreth nesh", href: "/rreth-nesh" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#36415A] bg-[#202734]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B7D894]">
            <Goal className="h-6 w-6 text-[#202734]" />
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-white">
            Pitch<span className="text-[#B7D894]">Book</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
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

        {/* Desktop booking button */}
        <Link
          href="/fushat"
          className="hidden items-center gap-2 rounded-xl bg-[#B7D894] px-5 py-3 text-sm font-bold text-[#202734] transition-all hover:bg-[#E0F8C7] md:inline-flex"
        >
          Rezervo një fushë
          <ArrowUpRight size={18} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Mbyll menynë" : "Hap menynë"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white hover:bg-[#36415A] md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#36415A] bg-[#202734] px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-[#36415A] text-[#B7D894]"
                    : "text-slate-200 hover:bg-[#36415A]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/fushat"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#B7D894] px-5 py-3 font-bold text-[#202734]"
            >
              Rezervo një fushë
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
