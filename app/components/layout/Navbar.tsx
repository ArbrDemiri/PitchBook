
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#36415A] bg-[#202734]/95 backdrop-blur-xl">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
