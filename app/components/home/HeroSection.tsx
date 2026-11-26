
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HeroSectionProps = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function HeroSection({
  badge,
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#202734] via-[#293D40] to-[#295540]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8">

        <p className="mb-6 text-xs font-bold tracking-widest text-[#B7D894]">
          {badge}
        </p>

        <h1 className="text-5xl font-black text-white">
          {title}
          <br />
          <span className="text-[#B7D894]">
            {highlight}
          </span>
        </h1>

        <p className="my-6 max-w-xl text-slate-200">
          {description}
        </p>

        <Link
          href={buttonLink}
          className="inline-flex items-center gap-3 bg-[#B7D894] px-7 py-4 font-bold text-[#202734]"
        >
          {buttonText}
          <ArrowRight size={19} />
        </Link>

      </div>
    </section>
  );
}
