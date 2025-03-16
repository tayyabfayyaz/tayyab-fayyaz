'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML & CSS', percentage: 95, color: 'bg-yellow-400' },
  { name: 'TYPESCRIPT', percentage: 90, color: 'bg-yellow-400' },
  { name: 'JAVASCRIPT', percentage: 80, color: 'bg-yellow-400' },
  { name: 'PYTHON', percentage: 85, color: 'bg-yellow-400' },
  { name: 'SEO', percentage: 75, color: 'bg-yellow-400' },
  { name: 'CMS', percentage: 60, color: 'bg-yellow-400' },
];

interface SkillItemProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillItem = ({ name, percentage, color }: SkillItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mb-8"
    >
      <div className="flex justify-between mb-2">
        <span className="text-lg lg:text-xl text-white">{name}</span>
        <span className="text-lg lg:text-xl text-white">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </motion.div>
  );
};

function SkillSection() {
  return (
    <section className="w-full min-h-screen bg-zinc-900 py-20 px-5 lg:px-20 relative overflow-hidden">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white text-opacity-5 whitespace-nowrap pointer-events-none"
      >
        SKILLS
      </motion.div>

      <div className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
          {skills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;