
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Goal, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fushat", href: "/fushat" },
  { name: "Rreth nesh", href: "/rreth-nesh" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="md:hidden">

      <div className="mx-auto flex h-16 items-center justify-between px-5">

       
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B7D894]">
            <Goal className="h-5 w-5 text-[#202734]" />
          </div>

          <span className="text-xl font-extrabold text-white">
            Pitch<span className="text-[#B7D894]">Book</span>
          </span>
        </Link>

        
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Mbyll menynë" : "Hap menynë"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-white hover:bg-[#36415A]"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

    
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#36415A] px-5 py-5"
        >
          <div className="flex flex-col gap-2">

            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-[#36415A] text-[#B7D894]"
                      : "text-slate-200 hover:bg-[#36415A]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            
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

    </nav>
  );
}
