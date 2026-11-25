
"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fields = [
  { id: 1, name: "Football Field 1", city: "Gostivar", type: "Indoor", price: 200 },
  { id: 2, name: "Football Field 2", city: "Tetovo", type: "Indoor", price: 300 },
  { id: 3, name: "Football Field 3", city: "Ohrid", type: "Outdoor", price: 400 },
  { id: 4, name: "Football Field 4", city: "Skopje", type: "Indoor", price: 500 },
];

export default function FeaturedFieldsSection() {
  return (
    <section className="bg-gradient-to-r from-[#202734] via-[#293D40] to-[#295540] px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-black uppercase md:text-5xl">
            Featured Fields
          </h2>

          <Link
            href="/fushat"
            className="flex items-center gap-2 text-[#B7D894]"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <Link
              href={`/fushat/${field.id}`}
              key={field.id}
              className="group overflow-hidden  bg-[#36415A] shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image className="" src={"/picture/field.jpg"} alt={field.name} width={450} height={200} />

                <span className="absolute left-4 top-4  bg-[#B7D894] px-3 py-1 text-xs font-bold text-[#202734]">
                  {field.type}
                </span>

                <span className="absolute right-4 top-4  bg-yellow-400 px-3 py-1 text-xs font-bold text-[#202734]">
                  Demo
                </span>

                <div className="absolute bottom-3 right-3  bg-[#202734]/90 px-3 py-2 text-right">
                  <p className="font-bold text-[#B7D894]">
                    {field.price.toLocaleString("en-US")} MKD
                  </p>
                  <p className="text-xs text-slate-300">Per Hour</p>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black text-white">
                  {field.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                  <MapPin size={15} />
                  {field.city} · Demo Address
                </p>

                <p className="mt-4 flex items-center gap-2 text-sm font-medium text-[#B7D894]">
                  View Details <ArrowRight size={16} />
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
