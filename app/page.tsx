import Image from "next/image";
import Navbar from "../app/components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import SearchSection from "./components/home/SearchSection";
export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <SearchSection />
        </>
  )
  }