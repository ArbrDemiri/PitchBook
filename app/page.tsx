
import HeroSection from "../app/components/home/HeroSection";
import SearchSection from "../app/components/home/SearchSection";
import FeaturedFieldsSection from "../app/components/home/FeaturedFieldsSection";
import MobileNavbar from "./components/layout/MobileNavbar";
import DesktopNavbar from "./components/layout/DesktopNavbar";
// FOOTBALL FIELD DATA

const fields = [
  {
    id: 1,
    name: "Football Field 1",
    city: "Gostivar",
    type: "Indoor",
    price: 200,
    image: "/picture/field.jpg",
  },
  {
    id: 2,
    name: "Football Field 2",
    city: "Tetovo",
    type: "Indoor",
    price: 300,
    image: "/picture/field.jpg",
  },
  {
    id: 3,
    name: "Football Field 3",
    city: "Ohrid",
    type: "Outdoor",
    price: 400,
    image: "/picture/field.jpg",
  },
  {
    id: 4,
    name: "Football Field 4",
    city: "Skopje",
    type: "Indoor",
    price: 500,
    image: "/picture/field.jpg",
  },
];

export default function HomePage() {
  return (
    <main>

      {/* HERO SECTION */}
      
      <MobileNavbar/>
      <DesktopNavbar/>
      <HeroSection
        badge="YOUR NEXT MATCH STARTS HERE"
        title="MORE FOOTBALL."
        highlight="LESS WAITING."
        description="Discover the best football pitches and sports halls. Book your slot quickly, easily, and without creating an account."
        buttonText="Explore the fields"
        buttonLink="/fushat"
      />

      {/* SEARCH SECTION */}

      <SearchSection
        cities={[
          "Shkup",
          "Tetovë",
          "Gostivar",
          "Ohër",
        ]}
        fieldTypes={[
          "Indoor",
          "Outdoor",
        ]}
      />

      {/* FEATURED FIELDS */}

      <FeaturedFieldsSection
        fields={fields}
      />

    </main>
  );
}
