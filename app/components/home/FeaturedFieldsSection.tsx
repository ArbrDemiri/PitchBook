
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FieldCard from "./FieldCard";

type Field = {
  id: number;
  name: string;
  city: string;
  type: string;
  price: number;
  image: string;
};

type FeaturedFieldsSectionProps = {
  fields: Field[];
};

export default function FeaturedFieldsSection({
  fields,
}: FeaturedFieldsSectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#202734] via-[#293D40] to-[#295540] px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
            Featured Fields
          </h2>

          <Link
            href="/fushat"
            className="flex items-center gap-2 text-[#B7D894]"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {fields.map((field) => (
            <FieldCard
              key={field.id}
              {...field}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
