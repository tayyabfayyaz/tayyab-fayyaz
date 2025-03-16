'use client';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaLongArrowAltRight 
} from "react-icons/fa";
import { 
  FaLocationDot, 
  FaPhone, 
  FaRegCopyright 
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" }
];

const services = [
  "Web Designing",
  "Web Development",
  "SEO",
  "Android Development",
  "UI/UX Design"
];

const contactInfo = [
  { icon: <FaLocationDot />, text: "House #17, Sector 35/A, Karachi, Pakistan" },
  { icon: <FaPhone />, text: "+92 318 2997727" },
  { icon: <MdEmail />, text: "fayyaztayyab@gmail.com" }
];

const socialLinks = [
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
  { icon: <FaGithub />, href: "#" }
];

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tayyab Fayyaz</h3>
            <p className="text-gray-300 leading-relaxed">
              Creating digital experiences that combine innovation with seamless functionality.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <FaLongArrowAltRight className="text-yellow-400" />
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <FaLongArrowAltRight className="text-yellow-400" />
                  <span className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">{info.icon}</span>
                  <p className="text-gray-300">{info.text}</p>
                </div>
              ))}
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-zinc-700 mt-12 pt-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
            <FaRegCopyright />
            <span>{new Date().getFullYear()} Tayyab Fayyaz. All rights reserved</span>
            <span className="text-yellow-400 mx-2">|</span>
            <span>Developed with ❤️ by Tayyab</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;