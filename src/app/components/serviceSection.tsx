'use client';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { 
  MdOutlineDesignServices, 
  MdOutlinePivotTableChart 
} from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiLightBulb } from "react-icons/gi";

const services = [
  {
    icon: <MdOutlineDesignServices />,
    title: "Web Design",
    description: "Crafting visually stunning and user-friendly interfaces",
    color: "bg-yellow-400"
  },
  {
    icon: <MdOutlinePivotTableChart />,
    title: "SEO",
    description: "Boosting your digital visibility and search rankings",
    color: "bg-purple-400"
  },
  {
    icon: <LiaLaptopCodeSolid />,
    title: "Web Development",
    description: "Building robust and scalable web applications",
    color: "bg-blue-400"
  },
  {
    icon: <GiLightBulb />,
    title: "New Ideas",
    description: "Innovative solutions for digital transformation",
    color: "bg-green-400"
  }
];

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.2 }}
    className="relative group"
  >
    <Card className="h-[350px] bg-zinc-800 border-zinc-700 overflow-hidden hover:border-yellow-400 transition-colors">
      <div className={`w-full h-1 ${service.color} transition-all duration-500 group-hover:h-full`} />
      
      <div className="absolute top-0 left-0 right-0 p-8 flex flex-col items-center text-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="text-6xl mb-6 text-yellow-400 group-hover:text-white transition-colors"
        >
          {service.icon}
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-300">{service.description}</p>
        
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="absolute bottom-0 h-1 bg-yellow-400"
        />
      </div>
    </Card>
  </motion.div>
);

function ServiceSection() {
  return (
    <section className="w-full min-h-screen bg-zinc-900 py-20 px-4 lg:px-20 relative overflow-hidden">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white text-opacity-5 whitespace-nowrap pointer-events-none"
      >
        SERVICES
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
            Our Expertise
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming digital experiences through innovative solutions and cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;