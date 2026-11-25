'use client'
import Link from "next/link";
import { ArrowRight, Divide, MapPin, Search } from "lucide-react";


export default function HeroSection() {

    return (
        <section className=" bg-gradient-to-r from-[#202734] via-[#293D40] to-[#295540]">
            <div className="absolute inset-y-0 right-0 w-full opacity-20 md:w-[65%] md:opacity-40">
            </div>
            <div className=" mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:pb-28 md:pt-32">
                <p className="mb-6 w-fit  border border-[#B7D894]/30 px-4 py-2 text-[10px] font-bold tracking-widest text-[#B7D894] sm:mb-8 sm:px-5 sm:text-xs">
                    ● YOUR NEXT MATCH STARTS HERE
                </p>
                <h1 className="text-5xl font-black leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl lg:text-[85px] lg:leading-[0.98]">
                    MORE FOOTBALL.
                    <br />
                    <span className="text-[#B7D894]">LESS WAITING.</span>
                </h1>
                <p className="my-6 max-w-xl text-sm leading-7 text-slate-200 sm:my-7 sm:text-base md:text-lg">
                    Discover the best football pitches and sports halls. Book your slot quickly, easily, and without creating an account..
                </p>
                <Link
                    href="/fushat"
                    className="inline-flex items-center gap-3  bg-[#B7D894] px-6 py-3.5 text-sm font-bold text-[#202734] transition-all duration-300 hover:bg-[#E0F8C7] hover:scale-105 sm:gap-5 sm:px-7 sm:py-4 sm:text-base"
                >
                    Explore the fields
                    <ArrowRight size={19} />
                </Link>
            </div>
        </section>

    );
}