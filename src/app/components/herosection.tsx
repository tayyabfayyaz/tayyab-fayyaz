"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const floatingVariants = {
  float: {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

function HeroSection() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-16"
    >
      {/* Text Content */}
      <motion.div
        variants={containerVariants}
        className="lg:w-1/2 lg:pl-16 space-y-6"
      >
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={['Hello Everyone!!', 1000]}
            wrapper="p"
            speed={50}
            className="text-lg text-yellow-400 font-mono"
            repeat={Infinity}
          />
        </motion.div>

        <motion.h1 variants={itemVariants} className="space-y-4">
          <span className="block text-4xl lg:text-6xl font-bold text-white">
            I am{" "}
            <span className="text-yellow-400 underline underline-offset-8 decoration-4">
              Tayyab Fayyaz
            </span>
          </span>
          <div className="text-3xl lg:text-5xl font-semibold text-white">
            <span className="text-yellow-400">Freelance</span>{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Web Developer
            </span>
          </div>
          <span className="text-2xl lg:text-4xl text-white/80">
            & Python Expert
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 mt-8"
        >
          <Button
            variant="default"
            className="h-12 w-40 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold text-lg"
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            className="h-12 w-40 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold text-lg"
          >
            My Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Image Container */}
      <motion.div
        variants={itemVariants}
        className="lg:w-1/2 flex justify-center mt-12 lg:mt-0"
      >
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="relative w-full max-w-md"
        >
          <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />
          <Image
            src="/tayyab.png"
            alt="Tayyab Fayyaz"
            width={500}
            height={500}
            className="relative z-10 rounded-3xl border-4 border-yellow-400 shadow-2xl shadow-yellow-400/30"
          />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

export default HeroSection;