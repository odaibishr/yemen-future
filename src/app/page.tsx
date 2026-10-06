import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Services } from "@/components/sections/Services";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header with Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Values />
        <Services />
        <AppShowcase />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
