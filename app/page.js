import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import AboutUsSection from "./components/AboutUsSection";
import AccentSection from "./components/AccentSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-between m-0 p-0 scroll-smooth">
      <HeroSection />
      <CategoriesSection />
      <AboutUsSection />
      <AccentSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
