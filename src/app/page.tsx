"use client"

import HeroSection from "./components/herosection"
import ProjectSection from "./components/projectsection";
import SkillSection from "./components/skillsection"
import BlogSection from "./components/blogsection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <BlogSection />
    </main>
  );
}
