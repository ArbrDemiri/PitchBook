
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

type FieldCardProps = {
  id: number;
  name: string;
  city: string;
  type: string;
  price: number;
  image: string;
};

export default function FieldCard({
  id,
  name,
  city,
  type,
  price,
  image,
}: FieldCardProps) {
  return (
    <Link
      href={`/fushat/${id}`}
      className="group overflow-hidden bg-[#36415A] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      

      <div className="relative h-56 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 bg-[#B7D894] px-3 py-1 text-xs font-bold text-[#202734]">
          {type}
        </span>

        <span className="absolute right-4 top-4 bg-yellow-400 px-3 py-1 text-xs font-bold text-[#202734]">
          Demo
        </span>

        <div className="absolute bottom-3 right-3 bg-[#202734]/90 px-3 py-2 text-right">
          <p className="font-bold text-[#B7D894]">
            {price.toLocaleString("en-US")} MKD
          </p>

          <p className="text-xs text-slate-300">
            Per Hour
          </p>
        </div>

      </div>

      

      <div className="p-5">

        <h3 className="text-xl font-black text-white">
          {name}
        </h3>

        <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
          <MapPin size={15} />
          {city} · Demo Address
        </p>

        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-[#B7D894]">
          View Details
          <ArrowRight size={16} />
        </p>

      </div>

    </Link>
  );
}
