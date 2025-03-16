'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Furniture & Appliances",
    image: "/img2.jpg",
    description: "E-commerce platform for modern furniture",
    link: "https://funiro-tayyab.vercel.app/"
  },
  {
    title: "Real-Time Chat Web App",
    image: "/img3.jpg",
    description: "Instant messaging solution with WebSocket",
    link: "#"
  },
  {
    title: "Resume Builder",
    image: "/img4.jpg",
    description: "Create professional resumes effortlessly",
    link: "https://tayyab-resume-builder.vercel.app/"
  },
  {
    title: "Travel Portal",
    image: "/img5.jpg",
    description: "Adventure booking platform",
    link: "#"
  },
  {
    title: "CLI Projects",
    image: "/img6.jpg",
    description: "Enterprise resource planning solution",
    link: "https://github.com/tayyabfayyaz?tab=repositories"
  }
];

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="group relative h-[400px] overflow-hidden rounded-xl"
  >
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-all duration-500 group-hover:scale-105"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
    
    <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 translate-y-10 group-hover:translate-y-0">
      <Card className="bg-zinc-900/80 backdrop-blur-sm border-zinc-700">
        <CardHeader>
          <CardTitle className="text-yellow-400">{project.title}</CardTitle>
          <CardDescription className="text-zinc-300">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  </motion.div>
);

function ProjectSection() {
  return (
    <section className="w-full min-h-screen bg-zinc-900 py-20 px-4 lg:px-20 relative overflow-hidden">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white text-opacity-5 whitespace-nowrap pointer-events-none"
      >
        PROJECTS
      </motion.div>

      <div className="relative z-10 container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my technical expertise through these highlighted digital solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;