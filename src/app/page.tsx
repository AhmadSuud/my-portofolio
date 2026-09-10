import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] scroll-smooth transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      
      {/* Placeholder untuk bagian Projects (Langkah Selanjutnya) */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400 dark:text-gray-600">Projects Section (Next)</h2>
        </div>
      </section>
    </main>
  );
}