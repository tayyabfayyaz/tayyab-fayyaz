'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { 
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots 
} from "react-icons/fa";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, number>) => {
    console.log(data);
    // Add your form submission logic here
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full py-20 bg-zinc-900 px-4 lg:px-0 relative overflow-hidden">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-white text-opacity-5 whitespace-nowrap pointer-events-none"
      >
        CONTACT
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg lg:text-xl text-gray-300">
            Have a question or want to work together Let is connect
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="relative">
                <FaCommentDots className="absolute left-4 top-6 text-yellow-400 text-xl" />
                <textarea
                  {...register("message")}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold text-lg transition-all"
              >
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;