'use client'

import Link from "next/link";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaSearch } from "react-icons/fa";
import { MdOutlineMenu, MdClose } from "react-icons/md";


// Animation variants for the menu
const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  }
};

// Animation variants for the menu items
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: -20 }
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/tayyab-fayyaz-25757b277/" },
    { icon: <FaGithub />, href: "https://github.com/tayyabfayyaz" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/tayyab.fayyaz.3781" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/yours____tayyab/" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-gray-900 text-white w-full fixed top-0 z-50 shadow-lg"
    >
      <nav className="container flex justify-between items-center h-16 px-4 lg:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-yellow-400"
        >
          <Link href="/">Tayyab Fayyaz</Link>
        </motion.div>

        {/* Desktop Navigation */}
        {/* <div className="hidden lg:flex items-center gap-8 flex-1 max-w-3xl mx-8">
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white focus-visible:ring-yellow-400"
          />
        </div> */}

        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4 ml-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white"
          >
            <FaSearch size={20} />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <MdClose size={28} /> : <MdOutlineMenu size={28} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      {/* <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden px-4 pb-4"
          >
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border-gray-700 text-white"
            />
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-gray-800"
          >
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="border-b border-gray-700 pb-2"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-yellow-400 block py-2"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-center gap-6 p-4 border-t border-gray-700">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-yellow-400"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;